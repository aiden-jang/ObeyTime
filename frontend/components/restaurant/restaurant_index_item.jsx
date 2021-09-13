import React from 'react';
import { Link } from 'react-router-dom';


const RestaurantIndexItem = props => {
  return (
    <div className="search-result-restaurant">
      <hr />
      <Link to={`/restaurants/${props.restaurant.id}`}>
        <h2>{props.restaurant.name}</h2>
      </Link>
    </div>
  )
}

export default RestaurantIndexItem;
