class LookupsController < ApplicationController
  before_action :set_lookup, only: [:show, :update, :destroy]
  wrap_parameters false

  # PUT /lookups/user_id/itinerary_id
  def create

    @user = User.where(username: lookup_params[:username] )

    if @user.empty? == false

      @lookup = Lookup.new(itinerary_id:lookup_params[:itinerary_id], user_id: @user.ids[0])

      if @lookup.save
        # toggle share 
        @itinerary = Itinerary.find(lookup_params[:itinerary_id])
        @itinerary.update(shared: true);

        # build itinerary object to match show page requirements
        usernames = []
        @itinerary.users.each do |user|
          usernames << user.username
        end

        # pass planning to dates so planning table can render
        dates = @itinerary.dates.unshift 'Planning'

        render json: { 
          id: @itinerary.id,
          usernames: usernames, 
          dates: dates,
          shared: true, 
          location: @itinerary.location, 
          planning_rows: @itinerary.planning_rows, 
          scheduling_rows: @itinerary.scheduling_rows 
        }

      else
        render json: {error:"Failed To Save", status: 204}
      end

    else
      render json: {error:'User Not Found', status: 204}
    end
  end

  # DELETE /lookups/user_id/itinerary_id
  def destroy
    @itinerary = Itinerary.find(lookup_params[:itinerary_id])
    planning_rows = @itinerary.planning_rows

    # remove user id from each planning row interest aray
    planning_rows.each do | pr | 
      interest = pr.interest
      if interest.include? lookup_params[:user_id]
        updated_interest = interest.delete_if {|id| id == lookup_params[:user_id]}
      
        if PlanningRow.find(pr.id).update(interest: updated_interest)
          p 'removed'
        else
          render json: {error:"Failed To Remove", status: 422}
        end

      end
    end

    # toggle as unshared if only 1 user remains
    if Lookup.where(itinerary_id: lookup_params[:itinerary_id]).count === 1 && @itinerary.shared === true
      @itinerary.update(shared: false)
    end
  
    render json: {status: 204}

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lookup
      @lookup = Lookup.where(user_id: params[:user_id], itinerary_id: params[:itinerary_id])
    end

    # Only allow a trusted parameter "white list" through.
    def lookup_params
      params.permit(:user_id, :itinerary_id, :username)
    end
end
