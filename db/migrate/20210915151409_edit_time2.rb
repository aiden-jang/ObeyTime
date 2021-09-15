class EditTime2 < ActiveRecord::Migration[6.1]
  def change
    change_column :reservations, :time, :string

  end
end
