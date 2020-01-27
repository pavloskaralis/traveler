class CreateItineraries < ActiveRecord::Migration[6.0]
  def change
    create_table :itineraries do |t|
      t.string :location
      t.boolean :shared, default: false
      t.string :dates, array: true, default: []

      t.timestamps
    end
  end
end
