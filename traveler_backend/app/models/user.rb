class User < ApplicationRecord
    has_secure_password
    has_many :lookups, dependent: :destroy
    has_many :itineraries, through: :lookups
end
