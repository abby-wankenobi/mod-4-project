Rails.application.routes.draw do
  resources :artworks
  resources :galleries
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
