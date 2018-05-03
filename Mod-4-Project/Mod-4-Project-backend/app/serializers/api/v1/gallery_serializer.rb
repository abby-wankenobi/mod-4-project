class Api::V1::GallerySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :user
end
