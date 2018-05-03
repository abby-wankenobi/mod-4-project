class Api::V1::User < ApplicationRecord
  has_many :galleries
  has_many :artworks, through: :galleries
end
