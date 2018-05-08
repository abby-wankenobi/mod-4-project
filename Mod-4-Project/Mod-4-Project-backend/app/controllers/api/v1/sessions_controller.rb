class Api::V1::SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(name: params[:user][:name])
    unless user
      flash[:alert] = "Incorrect username or password"
      return redirect_to(controller: 'sessions', action: 'new')

    end
    user = user.try(:authenticate, params[:user][:password])
    session[:user_id] = user.id
    @user = user
    redirect_to controller: 'users', action: 'home'
  end

  def destroy
    session.delete :user_id
    redirect_to '/'
  end
end
