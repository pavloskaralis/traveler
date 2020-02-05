class Itinerary < ApplicationRecord
    has_many :lookups, dependent: :destroy
    has_many :users, through: :lookups
end
