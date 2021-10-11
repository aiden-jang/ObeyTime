import React, { useEffect } from 'react';
import ReservationForm from '../reservation/reservation_form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReviewShow from '../review/review_show';
import {
    faMoneyBillAlt as farMoneyBillAlt,
    faMap as farMap,
    faClock as farClock,
    faCreditCard as farCreditCard,
    faBookmark as farBookmark
} from '@fortawesome/free-regular-svg-icons';
import {
    faUtensils as fasUtensils,
    faMapMarkerAlt as fasMapMarkerAlt,
    faPhone as fasPhone,
    faUtensilSpoon as fasUtensilSpoon,
    faParking as fasParking,
    faBookmark as fasBookmark
} from '@fortawesome/free-solid-svg-icons';

class RestaurantShow extends React.Component {
    constructor (props) {
        super(props);

        this.handleFavorite = this.handleFavorite.bind(this);

        this.state = {
            id: 0,
            user_id: 0,
            restaurant_id: this.props.match.params.restaurantId
        };
    }

    componentDidMount () {
        if (!this.props.restaurant) this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }

    componentDidUpdate () {
        const { currentUser, favorites, fetchFavorites, restaurant } = this.props;

        if (currentUser && this.state.user_id === 0) {
           fetchFavorites().then(res => {
                const fav = favorites.find(favorite => 
                    restaurant.id === favorite.restaurant_id && currentUser.id === favorite.user_id);
                if (fav) {
                    this.setState({
                        id: fav.id,
                        user_id: fav.user_id
                    });              
                } else {
                    this.setState({
                        user_id: currentUser.id
                    });    
                }
            });
        }
        if (!currentUser && this.state.id !== 0 ) {
            this.setState({
                id: 0,
                user_id: 0
            });
        }
    }

    handleFavorite(e) {
        e.preventDefault();

        const { currentUser, openModal, createFavorite, deleteFavorite, restaurant } = this.props;

        if (!currentUser) {
            openModal('login');
        } else if (this.state.id === 0) {
            createFavorite({
                user_id: currentUser.id,
                restaurant_id: restaurant.id
            }).then(res => {
                this.setState({
                    id: res.favorite.id
                });
            });     
        } else {
            deleteFavorite(this.state.id);
            this.setState({
                id: 0
            });
        }
    }

    render() {
        const { restaurant, openModal, currentUser } = this.props;

        if (!restaurant) return null;

        return (
            <div className="restaurant-show-outer">
                <div className="restaurant-show-image">
                    <img src={restaurant.photoUrl} />
                </div>
                <div className="restaurant-favorite">
                    { (this.state.id !== 0) ? ( 
                        <button onClick={this.handleFavorite}>
                            <FontAwesomeIcon className="fav-saved" icon={fasBookmark} /> Restaurant saved!
                        </button>
                    ) : (
                        <button onClick={this.handleFavorite}>
                            <FontAwesomeIcon icon={farBookmark} /> Save this restaurant
                        </button>
                    )}
                </div>
                
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