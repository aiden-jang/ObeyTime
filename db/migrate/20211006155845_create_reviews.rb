class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false

      t.integer :rating_overall, null: false
      t.integer :rating_food	, null: false
      t.integer :rating_service, null: false
      t.integer :rating_ambience	, null: false
      t.integer :rating_value	, null: false
      t.integer :noise_level	, null: false
      t.text :body

      t.timestamps
    end
  end
end
