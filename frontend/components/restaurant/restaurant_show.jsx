import React from 'react'; 

class RestaurantShow extends React.Component {
    componentDidMount () {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }

    render() {
        if (!this.props.restaurant) return null;
        const { restaurant } = this.props;

        return (
            <div className="restaurant-show-outer">

                <div className="restaurant-show-image">
                    <img src={restaurant.photoUrl} />
                </div>
                <div className="restaurant-show-main">
                    <h1>{restaurant.name}</h1>
                    <hr />
                    <div className="restaurant-show-main-info">
                        <p>{restaurant.price_range}</p>
                        <p>{restaurant.cuisine}</p>
                        <br/>
                        <p>{restaurant.description}</p>
                    </div>
                </div>
                <div className="restaurant-show-side">
                    <div className="restaurant-show-side-info">
                    <p>{restaurant.address}</p>
                    <p>{restaurant.phone_number}</p>
                    <p>{restaurant.neighborhood}</p>
                    <p>{restaurant.hours}</p>
                    <p>{restaurant.cuisine}</p>
                    <p>{restaurant.parking_details}</p>
                    <p>{restaurant.payment_option}</p>
                    </div>
                </div> 
            </div>
        )
    }
}; 

export default RestaurantShow; 