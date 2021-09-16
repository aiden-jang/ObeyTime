# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Restaurant.destroy_all
Reservation.destroy_all
User.destroy_all

user1 = User.create!(
    email: 'demo@mail.com',
    first_name: 'Demo',
    last_name: 'Demo',
    password: 'password123',
    primary_location: 'New York / Tri-State Area'
)

restaurant1 = Restaurant.create!(
    name: 'Print Restaurant',
    address: '653 Eleventh Avenue Ink 48 Hotel New York, NY 10036s',
    phone_number: 2127572224,
    hours: '5:00 pm–10:30 pm',
    payment_option: 'Discover, MasterCard, Visa',
    price_range: '$$$$',
    dining_style: 'Casual Elegant',
    cuisine: 'American',
    neighborhood: 'Hell\'s Kitchen',
    parking_details: 'Street Parking',
    description: 'PRINT is one of New York City\'s premiere Farm-to-Table dining experiences.'
)

restaurant2 = Restaurant.create!(
    name: 'GAONNURI',
    address: '1250 BROADWAY 39th Floor New York, NY 10001',
    phone_number: 2129719045,
    hours: '5:30 pm–11:30 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$$$',
    dining_style: 'Elegant Dining',
    cuisine: 'Korean',
    neighborhood: 'Koreatown',
    parking_details: 'Street Parking',
    description: 'Korean Restaurant + BBQ | Penthouse Bar + Lounge'
)

restaurant3 = Restaurant.create!(
    name: 'Zia Maria - Chelsea',
    address: '318 W 23rd St, New York, NY 10011',
    phone_number: 2125249200,
    hours: '2:00 pm–10:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$$',
    dining_style: 'Casual Dining',
    cuisine: 'Italian',
    neighborhood: 'Chelsea',
    parking_details: 'Street Parking',
    description: 'Zia Maria Ristorante and Pizzeria in Chelsea is a family owned restaurant and pizzeria that offers authentic, homemade Italian food.'
)

restaurant4 = Restaurant.create!(
    name: 'Hearth',
    address: '403 East 12 Street New York, NY 10009',
    phone_number: 1466021300,
    hours: '2:00 pm–10:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$$$',
    dining_style: 'Casual Dining',
    cuisine: 'Italian',
    neighborhood: 'East Village',
    parking_details: 'Street Parking',
    description: 'Hearth is everything the name implies, a warm, comfortable place where nourishment is savored, and hospitality is served up with love.'
)

restaurant5 = Restaurant.create!(
    name: 'Ivan Ramen',
    address: '25 Clinton Street New York, NY 10002',
    phone_number: 1466783850,
    hours: '12:00 pm–9:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$',
    dining_style: 'Casual Dining',
    cuisine: 'Japanese',
    neighborhood: 'SoHo',
    parking_details: 'Street Parking',
    description: 'Ivan Ramen "More then Just Ramen!"'
)


photo1 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_1.jpg')
photo2 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_2.jpg')
photo3 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_3.jpg')
photo4 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_4.jpg')
photo5 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_5.jpg')

restaurant1.photo.attach(io: photo1, filename: 'restaurant_1.jpg')
restaurant2.photo.attach(io: photo2, filename: 'restaurant_2.jpg')
restaurant3.photo.attach(io: photo3, filename: 'restaurant_3.jpg')
restaurant4.photo.attach(io: photo4, filename: 'restaurant_4.jpg')
restaurant5.photo.attach(io: photo5, filename: 'restaurant_5.jpg')

# reservation1 = Reservation.create!(
#     user_id: 1,
#     restaurant_id: 1,
#     phone_number: 123456789,
#     email: user1.email,
#     party_size: 2,
#     date: '2021-12-20',
#     time: "18:00",
#     special_request: "",

# )