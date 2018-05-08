Rails.application.routes.draw do
  resources :users
  resources :sessions
  resources :artworks
  resources :galleries
  get '/' => 'sessions#new'
  get '/register' => 'users#new'
  post '/users' => 'users#create'
  post '/login' => 'sessions#create'
  post '/logout' => 'sessions#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
