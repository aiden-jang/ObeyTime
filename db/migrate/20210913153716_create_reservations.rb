class CreateReservations < ActiveRecord::Migration[6.1]
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.integer :phone_number, null: false
      t.string :email, null: false
      t.integer :party_size, null: false
      t.date :date, null: false
      t.time :time, null: false
      t.text :special_request

      t.timestamps
    end

    add_index :reservations, :user_id
    add_index :reservations, :restaurant_id
    add_index :reservations, :date
  end
end