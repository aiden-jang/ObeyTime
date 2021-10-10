class EditFavorites < ActiveRecord::Migration[6.1]
  def change
    add_index :favorites, [:user_id, :restaurant_id], unique: true
  end
end
