export const fetchRestaurants = () => (
    $.ajax({
        url: '/api/restaurants'
    })
);
    
export const fetchRestaurant = restaurantId => (
    $.ajax({
        url: `/api/restaurants/${restaurantId}`
    })
);
    