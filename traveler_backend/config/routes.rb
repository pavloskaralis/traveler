Rails.application.routes.draw do
  resources :lookups
  resources :scheduling_rows
  resources :planning_rows
  resources :itineraries, only: [:update, :destroy]
  resources :users, only: [:create] do
    resources :itineraries, only: [:create,  :show]
  end
  post "/login", to: "auth#login"
  get "/auto_login", to: "auth#auto_login"
  get "/user_is_authed", to: "auth#user_is_authed"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
