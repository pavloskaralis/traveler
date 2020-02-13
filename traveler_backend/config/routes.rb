Rails.application.routes.draw do
  resources :lookups, only: [:create]
  resources :planning_rows, only: [:update]
  resources :scheduling_rows, only: [:update, :destroy]
  resources :itineraries, only: [:update, :destroy] do
    resources :scheduling_rows, only: [:create]
    resources :planning_rows, only: [:create]
  end
  resources :users, only: [:create] do
    resources :itineraries, only: [:create,  :show]
  end
  delete "/lookups/:user_id/:itinerary_id", to: "lookups#destroy"
  post "/login", to: "auth#login"
  get "/auto_login", to: "auth#auto_login"
  get "/user_is_authed", to: "auth#user_is_authed"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
