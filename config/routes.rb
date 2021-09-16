Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :show]
    resources :restaurants, only: [:show, :index]
    resources :reservations, only: [:index, :show, :create, :update, :destroy]
  end
  
  root "static_pages#root"
end