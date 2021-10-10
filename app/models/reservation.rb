# == Schema Information
#
# Table name: reservations
#
#  id              :bigint           not null, primary key
#  user_id         :integer          not null
#  restaurant_id   :integer          not null
#  phone_number    :string           not null
#  email           :string           not null
#  party_size      :integer          not null
#  date            :date             not null
#  time            :string           not null
#  special_request :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Reservation < ApplicationRecord
    validates :user_id, :restaurant_id, :phone_number, :email, :party_size, :date, :time, presence: true

    belongs_to :user
    belongs_to :restaurant
end
