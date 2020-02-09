# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_06_183755) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "itineraries", force: :cascade do |t|
    t.string "location"
    t.boolean "shared"
    t.string "dates", default: [], array: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "lookups", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "itinerary_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["itinerary_id"], name: "index_lookups_on_itinerary_id"
    t.index ["user_id"], name: "index_lookups_on_user_id"
  end

  create_table "planning_rows", force: :cascade do |t|
    t.integer "itinerary_id"
    t.string "activity", default: ""
    t.string "category", default: ""
    t.string "website", default: ""
    t.string "address", default: ""
    t.integer "interest", default: [], array: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "scheduling_rows", force: :cascade do |t|
    t.string "date"
    t.integer "itinerary_id"
    t.string "time", default: ""
    t.string "activity", default: ""
    t.string "type", default: ""
    t.string "website", default: ""
    t.string "address", default: ""
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "lookups", "itineraries"
  add_foreign_key "lookups", "users"
end
