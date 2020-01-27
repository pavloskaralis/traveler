require 'test_helper'

class SchedulingRowsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @scheduling_row = scheduling_rows(:one)
  end

  test "should get index" do
    get scheduling_rows_url, as: :json
    assert_response :success
  end

  test "should create scheduling_row" do
    assert_difference('SchedulingRow.count') do
      post scheduling_rows_url, params: { scheduling_row: { activity: @scheduling_row.activity, adress: @scheduling_row.adress, date: @scheduling_row.date, itinerary_id: @scheduling_row.itinerary_id, type: @scheduling_row.type } }, as: :json
    end

    assert_response 201
  end

  test "should show scheduling_row" do
    get scheduling_row_url(@scheduling_row), as: :json
    assert_response :success
  end

  test "should update scheduling_row" do
    patch scheduling_row_url(@scheduling_row), params: { scheduling_row: { activity: @scheduling_row.activity, adress: @scheduling_row.adress, date: @scheduling_row.date, itinerary_id: @scheduling_row.itinerary_id, type: @scheduling_row.type } }, as: :json
    assert_response 200
  end

  test "should destroy scheduling_row" do
    assert_difference('SchedulingRow.count', -1) do
      delete scheduling_row_url(@scheduling_row), as: :json
    end

    assert_response 204
  end
end
