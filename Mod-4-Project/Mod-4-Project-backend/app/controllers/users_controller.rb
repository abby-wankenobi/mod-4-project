class UsersController < ApplicationController
  before_action :require_logged_in
  def new
  end

  def create
    @user = User.create(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json: @user
    end
  end
  def index
    render json: User.all
  end
  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
