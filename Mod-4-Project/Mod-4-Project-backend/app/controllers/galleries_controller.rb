class GalleriesController < ApplicationController

  skip_before_action :authenticate!

  def index
    render json: Gallery.all
  end

  def create
    @gallery = Gallery.create(gallery_params)
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

  def artworks
    @gallery = Gallery.find(params[:id])
    render json: @gallery.artworks
  end

  private

  def gallery_params
    params.require(:person).permit(:name, :artworks, :user_id)
  end
end
