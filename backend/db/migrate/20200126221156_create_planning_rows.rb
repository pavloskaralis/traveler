class CreatePlanningRows < ActiveRecord::Migration[6.0]
  def change
    create_table :planning_rows do |t|
      t.integer :itinerary_id
      t.string :activity
      t.string :type
      t.string :website
      t.string :address
      t.integer :interest

      t.timestamps
    end
  end
end
