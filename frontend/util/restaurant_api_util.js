export const fetchRestaurants = filters => (
    $.ajax({
        url: '/api/restaurants',
        data: { filters }
    })
);
    
export const fetchRestaurant = restaurantId => (
    $.ajax({
        url: `/api/restaurants/${restaurantId}`
    })
);