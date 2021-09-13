import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import { useDispatch } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurant_actions';

const RestaurantIndex = ({restaurants}) => {
  const dispatch = useDispatch();

  if (restaurants.length === 0) {
    dispatch(fetchRestaurants());

  }
  return (
      <div>
        <h1>Restaurants: </h1>
        {restaurants.map(restaurant => (
          <RestaurantIndexItem
            restaurant={restaurant}
            key={restaurant.id}
          />
        ))}
      </div>
    )
};

export default RestaurantIndex;