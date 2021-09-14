import * as APIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT'; 

export const receiveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS, 
    restaurants
});

export const receiveRestaurant = restaurant => ({
    type: RECEIVE_RESTAURANT,   
    restaurant 
});

export const fetchRestaurants = filters => dispatch => (
    APIUtil.fetchRestaurants(filters)
        .then(restaurants => (dispatch(receiveRestaurants(restaurants))))
);

export const fetchRestaurant = restaurantId => dispatch => (
    APIUtil.fetchRestaurant(restaurantId)
        .then(restaurant => (dispatch(receiveRestaurant(restaurant))))
);