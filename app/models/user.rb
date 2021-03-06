# == Schema Information
#
# Table name: users
#
#  id               :bigint           not null, primary key
#  first_name       :string           not null
#  last_name        :string           not null
#  email            :string           not null
#  password_digest  :string           not null
#  session_token    :string           not null
#  primary_location :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class User < ApplicationRecord
    validates :email, :session_token, uniqueness: true, presence: true
    validates :password_digest, :first_name, :last_name, :primary_location, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
  
    attr_reader :password
    
    after_initialize :ensure_session_token
    
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end
    
    private
    
    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
end
