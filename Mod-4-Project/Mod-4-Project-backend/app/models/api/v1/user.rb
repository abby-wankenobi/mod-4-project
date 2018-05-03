class Api::V1::User < ApplicationRecord
  has_many :galleries 
end
