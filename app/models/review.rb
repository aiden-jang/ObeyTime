# == Schema Information
#
# Table name: reviews
#
#  id              :bigint           not null, primary key
#  user_id         :integer          not null
#  restaurant_id   :integer          not null
#  rating_overall  :integer          not null
#  rating_food     :integer          not null
#  rating_service  :integer          not null
#  rating_ambience :integer          not null
#  rating_value    :integer          not null
#  noise_level     :integer          not null
#  body            :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Review < ApplicationRecord
    validates :user_id, :restaurant_id, :rating_overall, :rating_food, :rating_service, :rating_ambience, :rating_value, :noise_level, presence: true

    belongs_to :user
    belongs_to :restaurant
end
