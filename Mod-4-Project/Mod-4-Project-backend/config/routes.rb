Rails.application.routes.draw do
  resources :users
  resources :sessions
  resources :artworks
  resources :galleries
  post '/users/', to: 'users#create'
  post '/sessions/', to: 'sessions#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
