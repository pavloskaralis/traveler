class LookupsController < ApplicationController
  before_action :set_lookup, only: [:show, :update, :destroy]

  # GET /lookups
  def index
    @lookups = Lookup.all

    render json: @lookups
  end

  # GET /lookups/1
  def show
    render json: @lookup
  end

  # POST /lookups
  def create
    @lookup = Lookup.new(lookup_params)

    if @lookup.save
      render json: @lookup, status: :created, location: @lookup
    else
      render json: @lookup.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /lookups/1
  def update
    if @lookup.update(lookup_params)
      render json: @lookup
    else
      render json: @lookup.errors, status: :unprocessable_entity
    end
  end

  # DELETE /lookups/1
  def destroy
    @lookup.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lookup
      @lookup = Lookup.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def lookup_params
      params.require(:lookup).permit(:user_id, :itinerary_id)
    end
end
