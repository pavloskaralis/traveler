class UsersController < ApplicationController
  before_action :set_itinerary, only: [:show, :update, :destroy]
  skip_before_action :require_login, only: [:create]
  wrap_parameters false

  def create
    
    if !User.find_by(username: params[:username])
      user = User.new(user_params) 
    else
      user = nil
    end

    if user != nil && user.save
        payload = {user_id: user.id}
        token = encode_token(payload)

        render json: {id: user.id, jwt: token} , status:201
    else
        render json: {error: "Username Already Taken", status: 422} 
    end

  end

  private 
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.permit(:username, :password)
  end
end
