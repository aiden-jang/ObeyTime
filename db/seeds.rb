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
    first_name: 'Aiden',
    last_name: 'Jang',
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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
    description: 'Habitant morbi tristique senectus et netus. Sed odio morbi quis commodo odio aenean sed adipiscing. '
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
    description: 'Neque laoreet suspendisse interdum consectetur libero. Et malesuada fames ac turpis egestas. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque.'
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
    description: 'Ac tortor dignissim convallis aenean et. Id faucibus nisl tincidunt eget nullam non. Elit ullamcorper dignissim cras tincidunt lobortis. Sit amet risus nullam eget.'
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
    description: 'Ac turpis egestas sed tempus urna et pharetra pharetra. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Habitant morbi tristique senectus et netus. Aenean pharetra magna ac placerat vestibulum lectus. '
)

restaurant5 = Restaurant.create!(
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
    description: 'Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Tristique senectus et netus et malesuada fames. Ac tortor vitae purus faucibus ornare suspendisse sed.'
)

restaurant6 = Restaurant.create!(
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
    description: 'Venenatis urna cursus eget nunc scelerisque viverra. Ipsum suspendisse ultrices gravida dictum. Molestie ac feugiat sed lectus. Tortor condimentum lacinia quis vel eros donec ac.'
)
restaurant7 = Restaurant.create!(
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
    description: 'Cursus mattis molestie a iaculis. Augue ut lectus arcu bibendum at varius. Adipiscing bibendum est ultricies integer quis auctor elit sed.'
)

restaurant8 = Restaurant.create!(
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
    description: 'Mauris sit amet massa vitae tortor condimentum lacinia quis. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum.'
)

restaurant9 = Restaurant.create!(
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
    description: 'Ornare arcu dui vivamus arcu felis bibendum ut tristique. Velit ut tortor pretium viverra suspendisse potenti nullam. Enim neque volutpat ac tincidunt vitae. '
)

restaurant10 = Restaurant.create!(
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
    description: 'Etiam tempor orci eu lobortis elementum nibh tellus molestie. Convallis convallis tellus id interdum velit laoreet id donec ultrices. '
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
    description: 'Varius duis at consectetur lorem donec massa sapien faucibus. Est placerat in egestas erat imperdiet sed. '
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
    description: 'Est placerat in egestas erat imperdiet sed. Turpis egestas maecenas pharetra convallis. In ante metus dictum at tempor. Integer vitae justo eget magna fermentum iaculis eu.'
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
    description: 'Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Cursus turpis massa tincidunt dui ut ornare lectus. Volutpat est velit egestas dui id ornare arcu odio ut. '
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
    description: 'Eget nullam non nisi est sit amet. Varius duis at consectetur lorem donec massa sapien faucibus et. Quam viverra orci sagittis eu volutpat. Integer malesuada nunc vel risus commodo viverra maecenas. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. '
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
    description: ' Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Non odio euismod lacinia at quis risus sed. '
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
    description: 'Venenatis tellus in metus vulputate. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Malesuada pellentesque elit eget gravida cum sociis. Sed arcu non odio euismod.'
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
    description: 'Lectus mauris ultrices eros in cursus. Suspendisse potenti nullam ac tortor. Nulla malesuada pellentesque elit eget gravida cum sociis.'
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
    description: 'Interdum velit laoreet id donec. Laoreet suspendisse interdum consectetur libero id. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Augue neque gravida in fermentum et sollicitudin ac orci phasellus.'
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
    description: 'In hac habitasse platea dictumst vestibulum rhoncus. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. In cursus turpis massa tincidunt dui ut ornare lectus. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor.'
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
    description: 'Tortor condimentum lacinia quis vel eros donec ac odio tempor. '
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
    description: 'Tellus cras adipiscing enim eu turpis egestas pretium. Sed lectus vestibulum mattis ullamcorper. Dictum varius duis at consectetur lorem donec. Vitae turpis massa sed elementum tempus egestas sed.'
)

photo1 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_1.jpg')
photo2 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_2.jpg')
photo3 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_3.jpg')
photo4 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_4.jpg')
photo5 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_5.jpg')
photo6 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_6.jpg')
photo7 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_7.jpg')
photo8 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_8.jpg')
photo9 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_9.jpg')
photo10 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_10.jpg')
photo11 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_11.jpg')
photo12 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_12.jpg')
photo13 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_13.jpg')
photo14 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_14.jpg')
photo15 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_15.jpg')
photo16 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_16.jpg')
photo17 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_17.jpg')
photo18 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_18.jpg')
photo19 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_19.jpg')
photo20 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_20.jpg')
photo21 = URI.open('https://obeytime-seeds.s3.amazonaws.com/restaurant_21.jpg')

restaurant1.photo.attach(io: photo1, filename: 'restaurant_1.jpg')
restaurant2.photo.attach(io: photo2, filename: 'restaurant_2.jpg')
restaurant3.photo.attach(io: photo3, filename: 'restaurant_3.jpg')
restaurant4.photo.attach(io: photo4, filename: 'restaurant_4.jpg')
restaurant5.photo.attach(io: photo5, filename: 'restaurant_5.jpg')
restaurant6.photo.attach(io: photo6, filename: 'restaurant_6.jpg')
restaurant7.photo.attach(io: photo7, filename: 'restaurant_7.jpg')
restaurant8.photo.attach(io: photo8, filename: 'restaurant_8.jpg')
restaurant9.photo.attach(io: photo9, filename: 'restaurant_9.jpg')
restaurant10.photo.attach(io: photo10, filename: 'restaurant_10.jpg')
restaurant11.photo.attach(io: photo11, filename: 'restaurant_12.jpg')
restaurant12.photo.attach(io: photo12, filename: 'restaurant_12.jpg')
restaurant13.photo.attach(io: photo13, filename: 'restaurant_13.jpg')
restaurant14.photo.attach(io: photo14, filename: 'restaurant_14.jpg')
restaurant15.photo.attach(io: photo15, filename: 'restaurant_15.jpg')
restaurant16.photo.attach(io: photo16, filename: 'restaurant_16.jpg')
restaurant17.photo.attach(io: photo17, filename: 'restaurant_17.jpg')
restaurant18.photo.attach(io: photo18, filename: 'restaurant_18.jpg')
restaurant19.photo.attach(io: photo29, filename: 'restaurant_19.jpg')
restaurant20.photo.attach(io: photo20, filename: 'restaurant_20.jpg')
restaurant21.photo.attach(io: photo21, filename: 'restaurant_21.jpg')

reservation1 = Reservation.create!(
    user_id: user1.id,
    restaurant_id: restaurant.id,
    phone_number: '2012012012',
    email: user1.email,
    party_size: 5,
    date: '2021-07-04',
    time: '17:00',
    special_request: ""
)
reservation2 = Reservation.create!(
    user_id: user1.id,
    restaurant_id: restaurant.id,
    phone_number: '2012012012',
    email: user1.email,
    party_size: 2,
    date: '2021-08-21',
    time: '17:30',
    special_request: ""
)
reservation3 = Reservation.create!(
    user_id: user1.id,
    restaurant_id: restaurant.id,
    phone_number: '2012012012',
    email: user1.email,
    party_size: 5,
    date: '2021-09-04',
    time: '17:00',
    special_request: ""
)
reservation4 = Reservation.create!(
    user_id: user1.id,
    restaurant_id: restaurant.id,
    phone_number: '2012012012',
    email: user1.email,
    party_size: 3,
    date: '2021-12-04',
    time: '17:00',
    special_request: ""
)
reservation5 = Reservation.create!(
    user_id: user1.id,
    restaurant_id: restaurant.id,
    phone_number: '2012012012',
    email: user1.email,
    party_size: 2,
    date: '2021-12-20',
    time: '18:00',
    special_request: ""
)