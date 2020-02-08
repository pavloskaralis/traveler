class ItinerariesController < ApplicationController
  before_action :set_itinerary, only: [:show, :update, :destroy]

  # GET /itineraries/1
  def show
    # @itinerary.users = @itinerary.users.username
    usernames = []
    @itinerary.users.each do |user|
      usernames << user.username
    end

    render json: { usernames: usernames, dates: @itinerary.dates, shared: @itinerary.shared, location: @itinerary.location, planning_rows: @itinerary.planning_rows, scheduling_rows: @itinerary.scheduling_rows }
  end
  # POST /itineraries
  def create
    dates = JSON.parse itinerary_params["dates"] 
    location = itinerary_params["location"]
    shared = itinerary_params["shared"]
  
    new_itinerary_params = { "location" => location , "dates" => dates, "shared" => shared }
    itinerary = Itinerary.new(new_itinerary_params)

    if itinerary.save 

      100.times do 
        planning_row_params = { "itinerary_id" => itinerary.id }
        PlanningRow.create(planning_row_params)
      end

      itinerary.dates.each do |date|
        20.times do
          scheduling_row_params = { "itinerary_id" => itinerary.id, "date" => date}
          SchedulingRow.create(scheduling_row_params)
        end
      end

      lookup_params = {"user_id" => params[:user_id] , "itinerary_id" => itinerary.id }
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
