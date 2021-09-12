export const fetchRestaurants = data => (
    $.ajax({
        url: '/api/restaurants',
        data
    })
);
    
export const fetchRestaurant = restaurantId => (
    $.ajax({
        url: `/api/restaurants/${restaurantId}`
    })
);
    