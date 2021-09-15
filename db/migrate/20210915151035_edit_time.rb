class EditTime < ActiveRecord::Migration[6.1]
  def change
    change_column :reservations, :phone_number, :string
  end
end
