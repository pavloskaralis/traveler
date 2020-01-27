require 'test_helper'

class UserItinerariesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_itinerary = user_itineraries(:one)
  end

  test "should get index" do
    get user_itineraries_url, as: :json
    assert_response :success
  end

  test "should create user_itinerary" do
    assert_difference('UserItinerary.count') do
      post user_itineraries_url, params: { user_itinerary: { itinerary_id: @user_itinerary.itinerary_id, user_id: @user_itinerary.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show user_itinerary" do
    get user_itinerary_url(@user_itinerary), as: :json
    assert_response :success
  end

  test "should update user_itinerary" do
    patch user_itinerary_url(@user_itinerary), params: { user_itinerary: { itinerary_id: @user_itinerary.itinerary_id, user_id: @user_itinerary.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy user_itinerary" do
    assert_difference('UserItinerary.count', -1) do
      delete user_itinerary_url(@user_itinerary), as: :json
    end

    assert_response 204
  end
end
