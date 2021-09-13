# == Schema Information
#
# Table name: restaurants
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  address         :string           not null
#  phone_number    :integer          not null
#  hours           :string           not null
#  payment_option  :string           not null
#  price_range     :string           not null
#  dining_style    :string           not null
#  cuisine         :string           not null
#  neighborhood    :string           not null
#  parking_details :string           not null
#  description     :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Restaurant < ApplicationRecord
    validates :name, :address, :phone_number, :hours, :payment_option, :price_range, :dining_style, :cuisine, :neighborhood, :parking_details, :description, presence: true 

    has_one_attached :photo
end
