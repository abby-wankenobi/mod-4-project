class Api::V1::UsersController < ApplicationController
  before_action :require_logged_in
  def new
  end

  def create
    @user = User.new(user_params)
    return redirect_to controller: 'users', action: 'new' unless @user.save
    session[:user_id] = @user.id
    redirect_to controller: 'users', action: 'home'
  end

  def index
    @users = User.all
    render json: @users
  end
  def create
    @user = User.create(username: params[:username], password: params[:password])
    render json: @user
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

end
