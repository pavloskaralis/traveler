class CreateSchedulingRows < ActiveRecord::Migration[6.0]
  def change
    create_table :scheduling_rows do |t|
      t.string :date
      t.integer :itinerary_id
      t.string :time
      t.string :activity
      t.string :type
      t.string :address

      t.timestamps
    end
  end
end
