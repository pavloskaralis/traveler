class CreateSchedulingRows < ActiveRecord::Migration[6.0]
  def change
    create_table :scheduling_rows do |t|
      t.string :date
      t.integer :itinerary_id
      t.string :time,  default: ''
      t.string :activity,  default: ''
      t.string :type,  default: ''
      t.string :website,  default: ''
      t.string :address,  default: ''

      t.timestamps
    end
  end
end
