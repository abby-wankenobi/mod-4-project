class UsersController < ApplicationController
  skip_before_action :authenticate!, only: [:create, :index, :show]

  def create
    @user = User.new

    @user.username = params[:username]
    @user.password = params[:password]

    if @user.save
      render json: user_hash(@user)
    else
      render json: {
        errors: @user.errors.full_messages
      }
    end
  end
  def index
    render json: User.all
  end
end
