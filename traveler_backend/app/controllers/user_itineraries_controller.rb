class UserItinerariesController < ApplicationController
  before_action :set_user_itinerary, only: [:show, :update, :destroy]
  skip_before_action :require_login


  # GET /user_itineraries
  def index
    @user_itineraries = UserItinerary.all

    render json: @user_itineraries
  end

  # GET /user_itineraries/1
  def show
    render json: @user_itinerary
  end

  # POST /user_itineraries
  def create
    @user_itinerary = UserItinerary.new(user_itinerary_params)

    if @user_itinerary.save
      render json: @user_itinerary, status: :created, location: @user_itinerary
    else
      render json: @user_itinerary.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_itineraries/1
  def update
    if @user_itinerary.update(user_itinerary_params)
      render json: @user_itinerary
    else
      render json: @user_itinerary.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_itineraries/1
  def destroy
    @user_itinerary.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_itinerary
      @user_itinerary = UserItinerary.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_itinerary_params
      params.require(:user_itinerary).permit(:user_id, :itinerary_id)
    end
end
