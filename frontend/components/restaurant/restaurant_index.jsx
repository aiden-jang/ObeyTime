import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';


class RestaurantIndex extends React.Component {
  componentDidMount () {
      this.props.fetchRestaurants();
  }
  render () {
    if (!this.props.restaurants) return null;
        const { restaurants } = this.props;
    console.log(restaurants)
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
  }
}


export default RestaurantIndex;
