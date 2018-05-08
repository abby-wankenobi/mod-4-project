class ArtworksController < ApplicationController

  skip_before_action :authenticate!

  def index
    @artworks = Artwork.all
    render json: @artworks
  end
  def create
    @artwork = Artwork.create(artwork_params)
    render json: @artwork
  end
  def show
    @artwork = Artwork.find(params[:id])
    render json: @artwork
  end

  private

  def artwork_params
    params.require(:artwork).permit(:title, :artist, :image, :gallery_id)
  end
end
