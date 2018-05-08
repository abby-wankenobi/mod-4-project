class UsersController < ApplicationController
  before_action :require_logged_in
  def new
  end

  def create
    @user = User.new(user_params)
    return redirect_to controller: 'users', action: 'new' unless @user.save
    session[:user_id] = @user.id
    render json: @user
  end
  def index
    render json: User.all
  end
  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
