class CreatePlanningRows < ActiveRecord::Migration[6.0]
  def change
    create_table :planning_rows do |t|
      t.integer :itinerary_id
      t.string :activity,  default: ''
      t.string :category,  default: ''
      t.string :website,  default: ''
      t.string :address,  default: ''
      t.integer :interest, array: true, default: []

      t.timestamps
    end
  end
end
