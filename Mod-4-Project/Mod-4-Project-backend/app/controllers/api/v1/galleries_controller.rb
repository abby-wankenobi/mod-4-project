class Api::V1::GalleriesController < ApplicationController

  def index
    @galleries = Gallery.all
    render json: @galleries
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
