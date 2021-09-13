import React from 'react';

const RestaurantIndexItem = props => {
  return (
    <div className="search-result-restaurant">
             <hr />
      <h2>{props.restaurant.name}</h2>
    </div>
  )
}

export default RestaurantIndexItem;
