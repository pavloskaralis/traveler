class CreateLookups < ActiveRecord::Migration[6.0]
  def change
    create_table :lookups do |t|
      t.references :user, null: false, foreign_key: true
      t.references :itinerary, null: false, foreign_key: true

      t.timestamps
    end
  end
end
