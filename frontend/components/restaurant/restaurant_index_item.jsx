import React from 'react';
import { Link } from 'react-router-dom';
import ReviewSearch from '../review/review_search';

const RestaurantIndexItem = ({ restaurant }) => {
  return (
    <div className="search-result-restaurant">
      <hr />
      <div className="search-result-restaurant-wrapper">
        <img src={restaurant.photourl} />
        <div className="search-result-restaurant-content">
          <Link className="restaurant-index-item-link-styling" to={`/restaurants/${restaurant.id}`}>
            <h2>{restaurant.name}</h2>
          </Link>
          <ReviewSearch 
            restaurant={restaurant}
          />
          <p>{restaurant.price_range} · {restaurant.cuisine} · {restaurant.neighborhood}</p>
        </div>
      </div>
      
    </div>
  )
};

export default RestaurantIndexItem;