class AuthController < ApplicationController
    skip_before_action :require_login, only: [:login, :auto_login]
    def login
      user = User.find_by(username: params[:username])
      if user && user.authenticate(params[:password])
          payload = {user_id: user.id}
          token = encode_token(payload)
          render json: {username: user.username, jwt: token, success: "Welcome back, #{user.username}"}
      else
          render json: {errors: user.errors.full_messages}, status: :not_acceptable
      end
    end
  
    def auto_login
      if session_user
        render json: session_user
      else
        render json: {errors: "No User Logged In"}
      end
    end
  
    def user_is_authed
      render json: {message: "You are authorized"}
    end
  end
  