# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.destroy_all
User.destroy_all

restaurant_1 = Restaurant.create!(
    name: 'restaurant_1',
    address: 'this is the address',
    phone_number: '1234567890',
    hours: '24/7',
    payment_option: 'Visa',
    price_range: '$',
    dining_style: 'yo',
    cuisine: 'this is cuisine',
    neighborhood: 'town',
    parking_details: 'street parking',
    description: 'Come dine here'
)

restaurant_2 = Restaurant.create!(
    name: 'restaurant_2',
    address: 'this is the address',
    phone_number: '1234567890',
    hours: '24/7',
    payment_option: 'Visa',
    price_range: '$',
    dining_style: 'yo',
    cuisine: 'this is cuisine',
    neighborhood: 'town',
    parking_details: 'street parking',
    description: 'Come dine here'
)

restaurant_3 = Restaurant.create!(
    name: 'restaurant_3',
    address: 'this is the address',
    phone_number: '1234567890',
    hours: '24/7',
    payment_option: 'Visa',
    price_range: '$',
    dining_style: 'yo',
    cuisine: 'this is cuisine',
    neighborhood: 'town',
    parking_details: 'street parking',
    description: 'Come dine here'
)

restaurant_4 = Restaurant.create!(
    name: 'restaurant_4',
    address: 'this is the address',
    phone_number: '1234567890',
    hours: '24/7',
    payment_option: 'Visa',
    price_range: '$',
    dining_style: 'yo',
    cuisine: 'this is cuisine',
    neighborhood: 'town',
    parking_details: 'street parking',
    description: 'Come dine here'
)

restaurant_5 = Restaurant.create!(
    name: 'restaurant_5',
    address: 'this is the address',
    phone_number: '1234567890',
    hours: '24/7',
    payment_option: 'Visa',
    price_range: '$',
    dining_style: 'yo',
    cuisine: 'this is cuisine',
    neighborhood: 'town',
    parking_details: 'street parking',
    description: 'Come dine here'
)