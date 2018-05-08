class ArtworksController < ApplicationController

  def index
    @artworks = Artwork.all
    render json: @artworks
  end
  def create
    @artwork = Artwork.create(title: params[:name], artist: params[:artist], image: params[:image], gallery: params[:gallery] )
    render json: @artwork
  end
  def show
    @artwork = Artwork.find(params[:id])
    render json: @artwork
  end
end
