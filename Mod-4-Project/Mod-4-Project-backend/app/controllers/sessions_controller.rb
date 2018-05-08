class SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:username])

    if @user && @user.try(:authenticate, params[:username][:password])
      session[:user_id] = @user.id
      render json: @user
    else
      render json: { errors: ["those credentials don't match anything we've got in our database"]}, :status => :unprocessable_entity
    end
  end
  def destroy
    session.delete :user_id
    redirect_to '/login'
  end

end
