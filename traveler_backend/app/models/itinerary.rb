class Itinerary < ApplicationRecord
    has_many :lookups, dependent: :destroy
    has_many :users, through: :lookups
    has_many :planning_rows, dependent: :destroy
    has_many :scheduling_rows, dependent: :destroy
end
