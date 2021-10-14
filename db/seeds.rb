# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
require 'faker'
require 'betterlorem'

Restaurant.destroy_all
Reservation.destroy_all
User.destroy_all
Favorite.destroy_all
Review.destroy_all

user1 = User.create!(
    email: 'demo@mail.com',
    first_name: 'Demo',
    last_name: 'Demo',
    password: 'password123',
    primary_location: 'New York / Tri-State Area'
)

user2 = User.create!(
    email: 'admin@mail.com',
    first_name: 'admin',
    last_name: 'admin',
    password: 'password123',
    primary_location: 'New York / Tri-State Area'
)

restaurant1 = Restaurant.create!(
    name: 'Strings',
    address: '9428 Tarkiln Hill Road New York, NY 10009',
    phone_number: '8745848579',
    hours: '5:00 pm–10:30 pm',
    payment_option: 'Discover, MasterCard, Visa',
    price_range: '$$$$',
    dining_style: 'Casual Elegant',
    cuisine: 'American',
    neighborhood: 'Hell\'s Kitchen',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description 
)

restaurant2 = Restaurant.create!(
    name: 'Spaghetti House',
    address: '921 4th Ave New York, NY 10025',
    phone_number: '6581234578',
    hours: '5:30 pm–11:30 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$$$',
    dining_style: 'Elegant Dining',
    cuisine: 'Italian',
    neighborhood: 'Meatpacking District',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description 
)

restaurant3 = Restaurant.create!(
    name: 'Little Caesar Pizza',
    address: '58 Old High Ridge Drive New York, NY 10003',
    phone_number: '7548462574',
    hours: '2:00 pm–10:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$$',
    dining_style: 'Casual Dining',
    cuisine: 'Italian',
    neighborhood: 'Chelsea',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description 
)

restaurant4 = Restaurant.create!(
    name: 'Two Spear Street',
    address: '723 E 4th St, New York, NY 10003',
    phone_number: '5840123048',
    hours: '2:00 pm–10:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$$$',
    dining_style: 'Casual Dining',
    cuisine: 'French',
    neighborhood: 'East Village',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description 
)

restaurant5 = Restaurant.create!(
    name: 'La Guadalupana',
    address: '9808 New Street New York, NY 10128',
    phone_number: '2016583598',
    hours: '12:00 pm–9:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$',
    dining_style: 'Casual Dining',
    cuisine: 'French',
    neighborhood: 'SoHo',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description
)

restaurant6 = Restaurant.create!(
    name: 'Rocksport',
    address: '5 West Brewery St. New York, NY 10024',
    phone_number: '4378459742',
    hours: '2:00 pm–10:30 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$',
    dining_style: 'Casual Dining',
    cuisine: 'Steakhouse',
    neighborhood: 'Hudson Yards',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description
)

restaurant7 = Restaurant.create!(
    name: 'Wall Street Pizza',
    address: '667 Mayflower Street New York, NY 10031',
    phone_number: '2876843547',
    hours: '9:00 am–9:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$$',
    dining_style: 'Casual Dining',
    cuisine: 'American',
    neighborhood: 'Upper West Side',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description
)

restaurant8 = Restaurant.create!(
    name: 'J J Jamokes Restaurant',
    address: '8198 Anderson Street New York, NY 10016',
    phone_number: '9847548254',
    hours: '2:00 pm–9:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$$$',
    dining_style: 'Casual Dining',
    cuisine: 'Barbecue',
    neighborhood: 'East Village',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description
)

restaurant9 = Restaurant.create!(
    name: 'Paradox Cafe',
    address: '8713 Gregory Dr. New York, NY 10025',
    phone_number: '5480236405',
    hours: '12:00 pm–9:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$$',
    dining_style: 'Casual Dining',
    cuisine: 'American',
    neighborhood: 'Little Italy',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description
)

restaurant10 = Restaurant.create!(
    name: 'Harvest On Hudson',
    address: '89 Water Dr. New York, NY 10040',
    phone_number: '3054128546',
    hours: '1:00 pm–9:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$$',
    dining_style: 'Casual Dining',
    cuisine: 'Seafood',
    neighborhood: 'Hudson Yards',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description
)

restaurant11 = Restaurant.create!(
    name: 'Wings Sports Bar & Grill',
    address: '57 Dunbar Ave. New York, NY 10027',
    phone_number: '3057892196',
    hours: '1:00 pm–11:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$',
    dining_style: 'Casual Dining',
    cuisine: 'Barbecue',
    neighborhood: 'Hell\'s Kitchen',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description
)

restaurant12 = Restaurant.create!(
    name: '809 Bar & Grill',
    address: '96 Country Club Drive New York, NY 10002',
    phone_number: '6587459864',
    hours: '12:00 pm–12:00 am',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$$',
    dining_style: 'Casual Dining',
    cuisine: 'Barbecue',
    neighborhood: 'Hell\'s Kitchen',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description
)

restaurant13 = Restaurant.create!(
    name: 'Pickle Bill\'s',
    address: '8815 Fieldstone St. New York, NY 10011',
    phone_number: '6148257125',
    hours: '1:00 pm–10:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$$$$',
    dining_style: 'Elegant Dining',
    cuisine: 'French',
    neighborhood: 'Meatpacking District',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description
)

restaurant14 = Restaurant.create!(
    name: 'Grains-Montana Rstrnt & Bkry',
    address: '6 Glenwood Ave. New York, NY 10033',
    phone_number: '985542211',
    hours: '2:00 pm–9:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$$$$',
    dining_style: 'Elegant Dining',
    cuisine: 'American',
    neighborhood: 'Meatpacking District',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description
)

restaurant15 = Restaurant.create!(
    name: 'Jayne Marie On Cross Lake',
    address: '9885 Sunset Street New York, NY 10040',
    phone_number: '9425550487',
    hours: '12:00 pm–10:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$$',
    dining_style: 'Casual Dining',
    cuisine: 'French',
    neighborhood: 'Chelsea',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description
)

restaurant16 = Restaurant.create!(
    name: 'Sapporo',
    address: '7139 Hall Drive New York, NY 10033',
    phone_number: '624785599',
    hours: '12:00 pm–11:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$$$',
    dining_style: 'Elegant Dining',
    cuisine: 'Steakhouse',
    neighborhood: 'Chelsea',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description
)

restaurant17 = Restaurant.create!(
    name: 'Double O',
    address: '7218 Bellevue St. New York, NY 10031',
    phone_number: '3406449325',
    hours: '12:00 pm–10:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$$',
    dining_style: 'Casual Dining',
    cuisine: 'Italian',
    neighborhood: 'SoHo',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description
)

restaurant18 = Restaurant.create!(
    name: 'Wing Shack',
    address: '335 Harrison St. New York, NY 10032',
    phone_number: '3054444448',
    hours: '12:00 pm–11:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$$',
    dining_style: 'Casual Dining',
    cuisine: 'Seafood',
    neighborhood: 'SoHo',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description
)

restaurant19 = Restaurant.create!(
    name: 'Coast Grille & Oyster Bar',
    address: '745 Vermont Drive New York, NY 10002',
    phone_number: '8746259998',
    hours: '12:00 pm–9:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$$',
    dining_style: 'Casual Dining',
    cuisine: 'Seafood',
    neighborhood: 'East Village',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description
)

restaurant20 = Restaurant.create!(
    name: 'Cafe Chardonnay',
    address: '41 Coffee Lane New York, NY 10128',
    phone_number: '6241157548',
    hours: '1:00 pm–9:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$',
    dining_style: 'Casual Dining',
    cuisine: 'French',
    neighborhood: 'Upper West Side',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description
)

restaurant21 = Restaurant.create!(
    name: 'Mainstreet Grill',
    address: '875 Orange St. New York, NY 10016',
    phone_number: '8754587168',
    hours: '12:00 pm–9:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$',
    dining_style: 'Casual Dining',
    cuisine: 'American',
    neighborhood: 'SoHo',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description
)

restaurant22 = Restaurant.create!(
    name: 'Baron\'s Cafe',
    address: '9052 Hawthorne St. New York, NY 10009',
    phone_number: '9706408461',
    hours: '1:00 pm–10:00 pm',
    payment_option: 'AMEX, Discover, MasterCard, Visa',
    price_range: '$$$',
    dining_style: 'Elegant Dining',
    cuisine: 'American',
    neighborhood: 'Meatpacking District',
    parking_details: 'Street Parking',
    description: Faker::Restaurant.description
)

photo1 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-1.jpeg')
photo2 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-2.jpeg')
photo3 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-3.jpeg')
photo4 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-4.jpeg')
photo5 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-5.jpeg')
photo6 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-6.jpeg')
photo7 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-7.jpeg')
photo8 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-8.jpeg')
photo9 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-9.jpeg')
photo10 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-10.jpeg')
photo11 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-11.jpeg')
photo12 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-12.jpeg')
photo13 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-13.jpeg')
photo14 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-14.jpeg')
photo15 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-15.jpeg')
photo16 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-16.jpeg')
photo17 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-17.jpeg')
photo18 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-18.jpeg')
photo19 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-19.jpeg')
photo20 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-20.jpeg')
photo21 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant-21.jpeg')
photo22 = URI.open('https://obeytime-seeds.s3.amazonaws.com/splash-search-bar.jpeg')

restaurant1.photo.attach(io: photo1, filename: 'restaurant-1.jpeg')
restaurant2.photo.attach(io: photo2, filename: 'restaurant-2.jpeg')
restaurant3.photo.attach(io: photo3, filename: 'restaurant-3.jpeg')
restaurant4.photo.attach(io: photo4, filename: 'restaurant-4.jpeg')
restaurant5.photo.attach(io: photo5, filename: 'restaurant-5.jpeg')
restaurant6.photo.attach(io: photo6, filename: 'restaurant-6.jpeg')
restaurant7.photo.attach(io: photo7, filename: 'restaurant-7.jpeg')
restaurant8.photo.attach(io: photo8, filename: 'restaurant-8.jpeg')
restaurant9.photo.attach(io: photo9, filename: 'restaurant-9.jpeg')
restaurant10.photo.attach(io: photo10, filename: 'restaurant-10.jpeg')
restaurant11.photo.attach(io: photo11, filename: 'restaurant-12.jpeg')
restaurant12.photo.attach(io: photo12, filename: 'restaurant-12.jpeg')
restaurant13.photo.attach(io: photo13, filename: 'restaurant-13.jpeg')
restaurant14.photo.attach(io: photo14, filename: 'restaurant-14.jpeg')
restaurant15.photo.attach(io: photo15, filename: 'restaurant-15.jpeg')
restaurant16.photo.attach(io: photo16, filename: 'restaurant-16.jpeg')
restaurant17.photo.attach(io: photo17, filename: 'restaurant-17.jpeg')
restaurant18.photo.attach(io: photo18, filename: 'restaurant-18.jpeg')
restaurant19.photo.attach(io: photo19, filename: 'restaurant-19.jpeg')
restaurant20.photo.attach(io: photo20, filename: 'restaurant-20.jpeg')
restaurant21.photo.attach(io: photo21, filename: 'restaurant-21.jpeg')
restaurant22.photo.attach(io: photo22, filename: 'restaurant-22.jpeg')

reservation1 = Reservation.create!(
    user_id: user1.id,
    restaurant_id: restaurant1.id,
    phone_number: '2012012012',
    email: user1.email,
    party_size: 5,
    date: '2021-07-04',
    time: '17:00',
    special_request: ''
)

reservation2 = Reservation.create!(
    user_id: user1.id,
    restaurant_id: restaurant2.id,
    phone_number: '2012012012',
    email: user1.email,
    party_size: 2,
    date: '2021-08-21',
    time: '17:30',
    special_request: ''
)

reservation3 = Reservation.create!(
    user_id: user1.id,
    restaurant_id: restaurant3.id,
    phone_number: '2012012012',
    email: user1.email,
    party_size: 5,
    date: '2021-09-04',
    time: '17:00',
    special_request: ''
)

reservation4 = Reservation.create!(
    user_id: user1.id,
    restaurant_id: restaurant4.id,
    phone_number: '2012012012',
    email: user1.email,
    party_size: 3,
    date: '2021-12-04',
    time: '17:00',
    special_request: ''
)

reservation5 = Reservation.create!(
    user_id: user1.id,
    restaurant_id: restaurant5.id,
    phone_number: '2012012012',
    email: user1.email,
    party_size: 2,
    date: '2021-12-20',
    time: '18:00',
    special_request: ''
)

reservation6 = Reservation.create!(
    user_id: user1.id,
    restaurant_id: restaurant6.id,
    phone_number: '2012012012',
    email: user1.email,
    party_size: 2,
    date: '2021-02-20',
    time: '18:00',
    special_request: ''
)

reservation7 = Reservation.create!(
    user_id: user1.id,
    restaurant_id: restaurant19.id,
    phone_number: '2012012012',
    email: user1.email,
    party_size: 2,
    date: '2021-05-20',
    time: '18:00',
    special_request: ''
)

favorite1 = Favorite.create!(
    user_id: user1.id,
    restaurant_id: restaurant5.id
)

favorite2 = Favorite.create!(
    user_id: user1.id,
    restaurant_id: restaurant8.id
)

favorite3 = Favorite.create!(
    user_id: user1.id,
    restaurant_id: restaurant14.id
)

favorite4 = Favorite.create!(
    user_id: user1.id,
    restaurant_id: restaurant2.id
)

favorite5 = Favorite.create!(
    user_id: user1.id,
    restaurant_id: restaurant17.id
)

review1 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant3.id,
    rating_overall: 2,
    rating_food: 5,
    rating_service: 4,
    rating_ambience: 2,
    rating_value: 1,
    noise_level: 2,
    body: Faker::Restaurant.review
)

review2 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant5.id,
    rating_overall: 5,
    rating_food: 5,
    rating_service: 5,
    rating_ambience: 5,
    rating_value: 5,
    noise_level: 2,
    body: Faker::Restaurant.review
)

80.times do 
    Review.create(
        user_id: user2.id,
        restaurant_id: Faker::Number.within(range: 1..22),
        rating_overall: Faker::Number.within(range: 1..5),
        rating_food: Faker::Number.within(range: 1..5),
        rating_service: Faker::Number.within(range: 1..5),
        rating_ambience: Faker::Number.within(range: 1..5),
        rating_value: Faker::Number.within(range: 1..5),
        noise_level: Faker::Number.within(range: 1..4),
        body: Faker::Restaurant.review
    )
end