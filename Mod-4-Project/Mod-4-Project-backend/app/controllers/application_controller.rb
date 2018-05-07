class ApplicationController < ActionController::API
protect_from_forgery with: :exception
before_action :current_user, :authenticate_request
attr_reader :current_user


 def current_user
   @user = (User.find_by(id: session[:user_id]) || User.new)
 end

 def logged_in?
   current_user.id != nil
 end

 def require_logged_in
   return redirect_to(controller: 'sessions', action: 'new') unless logged_in?
 end
 private

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  end
end
