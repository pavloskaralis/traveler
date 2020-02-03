class CreateItineraries < ActiveRecord::Migration[6.0]
  def change
    create_table :itineraries do |t|
      t.string :location
      t.boolean :shared
      t.string :dates, array: true

      t.timestamps
    end
  end
end
