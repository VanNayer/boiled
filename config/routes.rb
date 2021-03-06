# frozen_string_literal: true
Rails.application.routes.draw do
  devise_for :users
  get 'welcome/index'
  root 'welcome#index'
  resources :epics do
    post 'vote_up', on: :member
  end
end
