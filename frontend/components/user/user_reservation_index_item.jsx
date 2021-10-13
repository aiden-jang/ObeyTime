import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteFavorite, createFavorite, fetchFavorites } from '../../actions/favorite_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCommentAlt as farCommentAlt,
    faBookmark as farBookmark
} from '@fortawesome/free-regular-svg-icons';
import {
    faBookmark as fasBookmark
} from '@fortawesome/free-solid-svg-icons';

class UserReservationIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.addFavorite = this.addFavorite.bind(this);
        this.removeFavorite = this.removeFavorite.bind(this);
    }

    componentDidMount () {
        this.props.fetchFavorites();
    }

    addFavorite(e) {
        e.preventDefault();

        const { reservation, currentUser, restaurants, createFavorite, fetchFavorites } = this.props
        const restaurant = restaurants.find(restaurant =>
            restaurant.id === reservation.restaurant_id);

        createFavorite({
            user_id: currentUser.id,
            restaurant_id: restaurant.id
        }).then(res => fetchFavorites());
    }

    removeFavorite(e) {
        e.preventDefault();

        const {currentUser, reservation, restaurants, favorites, fetchFavorites, deleteFavorite } = this.props;
        const restaurant = restaurants.find(restaurant =>
            restaurant.id === reservation.restaurant_id);
        const favorite = favorites.find(favorite =>
            restaurant.id === favorite.restaurant_id && currentUser.id === favorite.user_id);
           
        deleteFavorite(favorite.id).then(res => fetchFavorites());
    }

    convertTime (time) {
        let newTime = "";
        let hour = parseInt(time.slice(0,2));
        if (hour >= 12) {
          hour -= 12;
          newTime = hour + time.slice(2,6) + " PM";
        } else {
          newTime = hour + time.slice(2,6) + " AM";
        }
        return newTime
    }

    render () {
        if (!this.props.restaurants.length) return null;

        const {reservation, restaurants, currentUser, reviews, favorites } = this.props;

        const today = new Date().toISOString().slice(0, 10);
        const restaurant = restaurants.find(restaurant =>
            restaurant.id === reservation.restaurant_id);
        let review = {};

        if (reservation.date < today) {
            review = reviews.find(review =>
                restaurant.id === review.restaurant_id && currentUser.id === review.user_id);
        }
    
        return (
            <div className="user-reservation-item">
                <Link className="user-reservation-rest-link-styling" to={`/restaurants/${restaurant.id}`}>
                    <img src={restaurant.photourl} />
                </Link>
                <div className="user-reservation-content">
                    <Link className="user-reservation-rest-link-styling" to={`/restaurants/${restaurant.id}`}>
                        <h2>{restaurant.name}</h2>
                    </Link>
                    <p>{reservation.date} at {this.convertTime(reservation.time)} </p>
                    <p>Table for {reservation.party_size} people.</p>
                    { (reservation.date >= today) ? (
                        <Link className="user-reservation-resv-link-styling" to={`/booking/view/${reservation.id}`}>
                            <h2>View</h2>
                        </Link>
                    ) : (review) ? (
                        <div className="user-profile-see-edit-review">
                            <Link className="user-review-link-styling" to={{
                                pathname: '/feedback/edit',
                                state: {
                                    review: review,
                                    currentUser: currentUser,
                                    restaurant: restaurant,
                                    reservation: reservation
                                }
                            }}>
                                <h2>
                                    <span>
                                        <FontAwesomeIcon className="user-profile-review" icon={farCommentAlt} />
                                    </span>
                                    &nbsp;
                                    See/Edit your review
                                </h2>
                            </Link>
                    
                        </div>
                    ) : (
                        <div className="user-profile-see-edit-review">
                            <Link className="user-review-link-styling" to={{
                                pathname: '/feedback',
                                state: {
                                    reservation: reservation,
                                    restaurant: restaurant
                                }
                            }}>
                                <h2>
                                    <FontAwesomeIcon className="user-profile-review" icon={farCommentAlt} />
                                    &nbsp;
                                    Write Review
                                </h2>
                            </Link>
                        </div>
                    )}
                    <div className="user-profile-favorites">
                        { (favorites.find(favorite =>
                            restaurant.id === favorite.restaurant_id && currentUser.id === favorite.user_id)) ? (
                            <button onClick={this.removeFavorite}>
                                <FontAwesomeIcon className="fav-saved" icon={fasBookmark} />
                                &nbsp;
                                Restaurant saved!
                            </button>
                        ) : (
                            <button onClick={this.addFavorite}>
                                <FontAwesomeIcon icon={farBookmark} />
                                &nbsp;
                                Save this restaurant
                            </button>
                        )}
                    </div>           
                </div>
                <hr />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    favorites: Object.values(state.entities.favorites)
});

const mapDispatchToProps = dispatch => ({
    fetchFavorites: () => dispatch(fetchFavorites()),
    createFavorite: favorite => dispatch(createFavorite(favorite)),
    deleteFavorite: favoriteId => dispatch(deleteFavorite(favoriteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserReservationIndexItem);