class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.integer :phone_number, null: false
      t.string :hours, null: false
      t.string :payment_option, null: false
      t.string :price_range, null: false
      t.string :dining_style, null: false
      t.string :cuisine, null: false
      t.string :neighborhood, null: false
      t.string :parking_details, null: false
      t.text :description, null: false
      t.timestamps
    end
  end
end
