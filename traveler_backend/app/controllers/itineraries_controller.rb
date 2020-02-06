class ItinerariesController < ApplicationController
  before_action :set_itinerary, only: [:show, :update, :destroy]

  # POST /itineraries
  def create
    dates = JSON.parse itinerary_params["dates"] 
    location = itinerary_params["location"]
    shared = itinerary_params["shared"]

    new_itinerary_params = { "location" => location , "dates" => dates, "shared" => shared }
    itinerary = Itinerary.new(new_itinerary_params)

    if itinerary.save 

      lookup_params = {"user_id" => params[:id] , "itinerary_id" => itinerary.id }

      lookup = Lookup.new(lookup_params)

      if lookup.save
        render json: {id: lookup.itinerary_id, status: 200}
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
    shared = itinerary_params["shared"]

    new_itinerary_params = { "location" => location , "dates" => dates, "shared" => shared }

    if @itinerary.update(new_itinerary_params)
      render json: {status: 200}
    else
      render json: {error:"Failed To Save", status: 204}
    end
  end

  # DELETE /itineraries/1
  def destroy
    @itinerary.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_itinerary
      @itinerary = Itinerary.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def itinerary_params
      params.require(:itinerary).permit(:dates, :location, :shared)
    end
end
