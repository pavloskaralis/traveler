require 'test_helper'

class LookupsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @lookup = lookups(:one)
  end

  test "should get index" do
    get lookups_url, as: :json
    assert_response :success
  end

  test "should create lookup" do
    assert_difference('Lookup.count') do
      post lookups_url, params: { lookup: { itinerary_id: @lookup.itinerary_id, user_id: @lookup.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show lookup" do
    get lookup_url(@lookup), as: :json
    assert_response :success
  end

  test "should update lookup" do
    patch lookup_url(@lookup), params: { lookup: { itinerary_id: @lookup.itinerary_id, user_id: @lookup.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy lookup" do
    assert_difference('Lookup.count', -1) do
      delete lookup_url(@lookup), as: :json
    end

    assert_response 204
  end
end
