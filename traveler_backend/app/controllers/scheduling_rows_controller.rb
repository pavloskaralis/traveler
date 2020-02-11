class SchedulingRowsController < ApplicationController
  before_action :set_scheduling_row, only: [:show, :update, :destroy]
  wrap_parameters false

  # GET /scheduling_rows
  def index
    @scheduling_rows = SchedulingRow.all

    render json: @scheduling_rows
  end

  # GET /scheduling_rows/1
  def show
    render json: @scheduling_row
  end

  # POST /scheduling_rows
  def create
    @scheduling_row = SchedulingRow.new(scheduling_row_params)

    if @scheduling_row.save
      @scheduling_row.itinerary_id = params[:itinerary_id]

      render json: {scheduling_row: @scheduling_row, status: 200}
    else
      render json: {error:"Failed To Save", status: 204}
    end

  end

  # PATCH/PUT /scheduling_rows/1
  def update
    if @scheduling_row.update(scheduling_row_params)
      render json: @scheduling_row
    else
      render json: @scheduling_row.errors, status: :unprocessable_entity
    end
  end

  # DELETE /scheduling_rows/1
  def destroy
    @scheduling_row.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_scheduling_row
      @scheduling_row = SchedulingRow.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def scheduling_row_params
      params.permit(:activity, :category, :address, :website, :time, :date, :itinerary_id, :id)
    end
end
