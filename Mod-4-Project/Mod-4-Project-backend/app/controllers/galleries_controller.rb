class GalleriesController < ApplicationController

  def index
    if logged_in?
      render json: Galleries.all
    else
      render json: { go_away: true }
    end
  end

  def create
    @gallery = Gallery.create(name: params[:name])
    render json: @gallery
  end

  def show
    @gallery = Gallery.find(params[:id])
    render json: @gallery
  end

  def update
    @gallery = Gallery.find(params[:id])
    @gallery.update(gallery_params)
    render json: @gallery
  end

  private

  def gallery_params
    params.require(:person).permit(:name, :artworks)
  end
end
