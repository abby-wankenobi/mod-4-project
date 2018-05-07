class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  has_secure_password
  has_many :galleries
  has_many :artworks, through: :galleries
end
