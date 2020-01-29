class Itinerary < ApplicationRecord
    has_many :user_itineraries, dependent: :destroy
    has_many :itineraries, through: :user_itineraries
end
