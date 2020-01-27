Rails.application.routes.draw do
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  resources :scheduling_rows
  resources :user_itineraries
  resources :itineraries
  resources :users, only: [:index, :show, :create] 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
