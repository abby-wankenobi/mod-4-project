class Api::V1::UsersController < ApplicationController

  def create
    @user = User.create(username: params[:username], password: params[:password])
    render json: @user
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end
  
end
