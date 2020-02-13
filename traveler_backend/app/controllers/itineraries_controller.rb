class ItinerariesController < ApplicationController
  before_action :set_itinerary, only: [:show, :update, :destroy]
  wrap_parameters false

  # GET /itineraries/1
  def show
    if @itinerary 

      usernames = []
      @itinerary.users.each do |user|
        usernames << user.username
      end

      # add planning to dates so that planning table can render
      dates = @itinerary.dates.unshift 'Planning'

      render json: { 
        id: @itinerary.id,
        usernames: usernames, 
        dates: dates,
        shared: @itinerary.shared, 
        location: @itinerary.location, 
        planning_rows: @itinerary.planning_rows, 
        scheduling_rows: @itinerary.scheduling_rows,
      }

    else
        render json: {error: 'Itinerary Not Found'}
    end
  end
  # POST /itineraries
  def create
    dates = JSON.parse itinerary_params["dates"] 
    location = itinerary_params["location"]
    shared = itinerary_params["shared"]
  
    new_itinerary_params = { "location" => location , "dates" => dates, "shared" => shared }
    @itinerary = Itinerary.new(new_itinerary_params)

    if @itinerary.save 

      # 10 default rows for planning table
      10.times do 
        planning_row_params = { "itinerary_id" => @itinerary.id }
        PlanningRow.create(planning_row_params)
      end

      lookup_params = {"user_id" => params[:user_id] , "itinerary_id" => @itinerary.id }
      @lookup = Lookup.new(lookup_params)

      if @lookup.save
        render json: {id: @lookup.itinerary_id, status: 200}
      else
        render json: {error:"Failed To Save", status: 204}
      end

    else
      render json: {error:"Failed To Save", status: 204}
    end
  end

  # PATCH/PUT /itineraries/1
  def update

    dates = JSON.parse itinerary_params["dates"] 
    location = itinerary_params["location"]
    
    # shared does not get updated through edit form 
    new_itinerary_params = { "location" => location , "dates" => dates, "shared" => @itinerary.shared }

    if @itinerary.update(new_itinerary_params)
      ActionCable.server.broadcast('itineraries', @itinerary)
      render json: {status: 200}
    else
      render json: {error:"Failed To Save", status: 204}
    end
  end

  # DELETE /itineraries/1
  def destroy
    if @itinerary.destroy
      render json: {status: 204}
    else 
      render json: {error: 'Failed To Delete', status: 422}
    end
    
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_itinerary
      @itinerary = Itinerary.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def itinerary_params
      params.permit(:dates, :location, :shared, :user_id, :id)
    end
end
