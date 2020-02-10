class LookupsController < ApplicationController
  before_action :set_lookup, only: [:show, :update, :destroy]
  wrap_parameters false

  # DELETE /lookups/user_id/itinerary_id
  def destroy
    @lookup.destroy


    @itinerary = itinerary.find(params[:itinerary_id])
    planning_rows = @itinerary.planning_rows

    planning_rows.each do | pr | 
      interest = pr.interest
      if interest.include? user_id 
        updated_interest = interest.delete_if {|id| id == params[:user_id]}
        
        PlanningRow.find(pr.id).update(interest: updated_interest)
      end
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
      params.permit(:user_id, :itinerary_id)
    end
end
