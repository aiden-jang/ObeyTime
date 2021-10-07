import React from 'react';
import ReservationForm from '../reservation/reservation_form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReviewShow from '../review/review_show';

import {
    faMoneyBillAlt as farMoneyBillAlt,
    faMap as farMap,
    faClock as farClock,
    faCreditCard as farCreditCard
} from '@fortawesome/free-regular-svg-icons';
import {
    faUtensils as fasUtensils,
    faMapMarkerAlt as fasMapMarkerAlt,
    faPhone as fasPhone,
    faUtensilSpoon as fasUtensilSpoon,
    faParking as fasParking
} from '@fortawesome/free-solid-svg-icons';

class RestaurantShow extends React.Component {
    constructor (props) {
        super(props);

        this.addFavorite = this.addFavorite.bind(this);
        this.state = {}
    }
    componentDidMount () {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }

    addFavorite(e) {
        e.preventDefault();

        console.log({
            user_id: this.props.currentUser.id,
            restaurant_id: this.props.restaurant.id
        })
        if (!this.props.currentUser) {
            this.props.openModal('login');
        } else {
            this.props.createFavorite({
                user_id: this.props.currentUser.id,
                restaurant_id: this.props.restaurant.id
            })
        }
    }
    // { (currentUser) ? (
    //     <input type="submit" value="Save this restaurant" />
    // ) : (null)}
    render() {
        if (!this.props.restaurant) return null;
        const { restaurant, openModal, currentUser } = this.props;

        return (
            <div className="restaurant-show-outer">
                <div className="restaurant-show-image">
                    <img src={restaurant.photoUrl} />
                </div>



                <input type="submit" value="Save this restaurant" onClick={this.addFavorite} />
            

                <div className="restaurant-show-main">
                    <div className="restaurant-show-main-content">
                        <h1>{restaurant.name}</h1>
                        <hr />
                        <div className="restaurant-show-info">
                            <div className="restaurant-show-main-info">
                                <FontAwesomeIcon icon={farMoneyBillAlt} />
                                <p> 
                                    {(restaurant.price_range === '$') ? "$15 and under": null}
                                    {(restaurant.price_range === '$$') ? "$16 and $30": null}
                                    {(restaurant.price_range === '$$$') ? "$31 to $50": null}
                                    {(restaurant.price_range === '$$$$') ? "$50 and over": null}
                                </p>
                                <FontAwesomeIcon icon={fasUtensils} />
                                <p>{restaurant.cuisine}</p>
                            </div>
                            <div className="restaurant-show-description">
                                <p>{restaurant.description}</p>
                            </div>
                        </div>
                    </div>
                    <ReviewShow
                        restaurant={restaurant}
                    />
                </div>
                <ReservationForm
                    restaurant={restaurant}
                    openModal={openModal}
                    currentUser={currentUser}
                />
                <div className="restaurant-show-side">
                    <div className="restaurant-show-side-info">
                        <ul> 
                            <li><FontAwesomeIcon icon={farMap} /> Address</li>
                            <li>{restaurant.address}</li>
                            <li><FontAwesomeIcon icon={fasMapMarkerAlt} /> Neighborhood</li>
                            <li>{restaurant.neighborhood}</li>
                            <li><FontAwesomeIcon icon={fasPhone} /> Phone Number</li>
                            <li>{restaurant.phone_number}</li>
                            <li><FontAwesomeIcon icon={farClock} /> Hours of operation</li>
                            <li>{restaurant.hours}</li>
                            <li><FontAwesomeIcon icon={farCreditCard} /> Payment Option</li>
                            <li>{restaurant.payment_option}</li>
                            <li><FontAwesomeIcon icon={fasUtensils} /> Cuisine</li>
                            <li>{restaurant.cuisine}</li>
                            <li><FontAwesomeIcon icon={fasUtensilSpoon} /> Dining Style</li>
                            <li>{restaurant.dining_style}</li>
                            <li><FontAwesomeIcon icon={fasParking} /> Parking Details</li>
                            <li>{restaurant.parking_details}</li>          
                        </ul>
                    </div>
                </div> 
            </div>
        )
    }
}; 

export default RestaurantShow; 