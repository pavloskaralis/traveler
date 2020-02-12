class PlanningRowsController < ApplicationController
  before_action :set_planning_row, only: [:show, :update, :destroy]
  wrap_parameters false

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
      @planning_row.itinerary_id = params[:itinerary_id]
   
      render json: {planning_row: @planning_row, status: 200}
    else
      render json: {error:"Failed To Save", status: 204}
    end
  end

  # PATCH/PUT /planning_rows/1
  def update
    activity = planning_row_params["activity"]
    category = planning_row_params["category"]
    address = planning_row_params["address"]
    website = planning_row_params["website"]
    interest = JSON.parse planning_row_params["interest"] 

    p "this is the interest param"
    p interest
    
    new_planning_row_params = { "activity" => activity , "category" => category, "address" => address, "website" => website, "interest" => interest }

    if @planning_row.update(new_planning_row_params)
      render json: @planning_row
    else
      render json: {error:"Failed To Update", status: 204}
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_planning_row
      @planning_row = PlanningRow.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def planning_row_params
      params.permit(:activity, :category, :address, :website, :interest, :itinerary_id, :id)
    end
end
