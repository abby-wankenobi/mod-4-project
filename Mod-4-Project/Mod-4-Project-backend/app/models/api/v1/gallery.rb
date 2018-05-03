class Api::V1::Gallery < ApplicationRecord
  belongs_to :user
  has_many :artworks
end
