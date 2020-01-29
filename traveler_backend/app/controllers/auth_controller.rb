class AuthController < ApplicationController
  skip_before_action :require_login, only: [:login, :auto_login]
  wrap_parameters false

  def login
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
        payload = {user_id: user.id}
        token = encode_token(payload)

        render json: {id: user.id, itineraries: user.itineraries, jwt: token}
    else
        render json: {status: 422, error: "Invalid Username/Password"} 
    end
  end

  def auto_login
    if session_user
      render json: {id: session_user.id, itineraries: session_user.itineraries}
    else
      render json: {errors: "No User Logged In"}
    end
  end

  def user_is_authed
    render json: {message: "You are authorized"}
  end
end
