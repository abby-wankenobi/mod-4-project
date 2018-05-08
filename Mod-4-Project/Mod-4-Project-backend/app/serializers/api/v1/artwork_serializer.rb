class Api::V1::ArtworkSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :image
  has_one :gallery
end
