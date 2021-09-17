import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

const RestaurantIndex = ({ restaurants }) => {
    return (
        <div className="search-result-content">
            {restaurants.map(restaurant => (
                <RestaurantIndexItem
                    restaurant={restaurant}
                    key={restaurant.id}
                />
            ))}
            <hr />
        </div>
    )
};

export default RestaurantIndex;