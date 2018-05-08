class ArtworksController < ApplicationController
  skip_before_action :authenticate!, only: [:index,:create]

  def index
    @artworks = Artwork.all
    render json: @artworks
  end
  def create
    @artwork = Artwork.create(name: params[:name])
    render json: @artwork
  end
  def show
    @artwork = Artwork.find(params[:id])
    render json: @artwork
  end
end
