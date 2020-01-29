class PlanningRowsController < ApplicationController
  before_action :set_planning_row, only: [:show, :update, :destroy]

  # GET /planning_rows
  def index
    @planning_rows = PlanningRow.all

    render json: @planning_rows
  end

  # GET /planning_rows/1
  def show
    render json: @planning_row
  end

  # POST /planning_rows
  def create
    @planning_row = PlanningRow.new(planning_row_params)

    if @planning_row.save
      render json: @planning_row, status: :created, location: @planning_row
    else
      render json: @planning_row.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /planning_rows/1
  def update
    if @planning_row.update(planning_row_params)
      render json: @planning_row
    else
      render json: @planning_row.errors, status: :unprocessable_entity
    end
  end

  # DELETE /planning_rows/1
  def destroy
    @planning_row.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_planning_row
      @planning_row = PlanningRow.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def planning_row_params
      params.fetch(:planning_row, {})
    end
end
