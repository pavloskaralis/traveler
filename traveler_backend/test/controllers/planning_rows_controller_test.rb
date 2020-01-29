require 'test_helper'

class PlanningRowsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @planning_row = planning_rows(:one)
  end

  test "should get index" do
    get planning_rows_url, as: :json
    assert_response :success
  end

  test "should create planning_row" do
    assert_difference('PlanningRow.count') do
      post planning_rows_url, params: { planning_row: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show planning_row" do
    get planning_row_url(@planning_row), as: :json
    assert_response :success
  end

  test "should update planning_row" do
    patch planning_row_url(@planning_row), params: { planning_row: {  } }, as: :json
    assert_response 200
  end

  test "should destroy planning_row" do
    assert_difference('PlanningRow.count', -1) do
      delete planning_row_url(@planning_row), as: :json
    end

    assert_response 204
  end
end
