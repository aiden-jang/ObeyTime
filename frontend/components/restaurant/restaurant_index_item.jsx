import React from 'react';
import { Link } from 'react-router-dom';


const RestaurantIndexItem = props => {

  return (
    <div className="search-result-restaurant">
      <hr />
      <div className="search-result-restaurant-wrapper">
        
        <img src={props.restaurant.photourl} />
        <div className="search-result-restaurant-content">
          <Link to={`/restaurants/${props.restaurant.id}`}>
            <h2>{props.restaurant.name}</h2>
          </Link>
          <p>{props.restaurant.price_range} · {props.restaurant.cuisine} · {props.restaurant.neighborhood}</p>
        </div>
      </div>
      
    </div>
  )
}

export default RestaurantIndexItem;
