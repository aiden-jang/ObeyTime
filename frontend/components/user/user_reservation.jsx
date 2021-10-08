import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchReservations } from '../../actions/reservation_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import { fetchReviews } from '../../actions/review_actions';
import { createFavorite, fetchFavorites, deleteFavorite } from '../../actions/favorite_actions';

import UserReservationIndex from './user_reservation_index';
import UserSideMenu from './user_side_menu';

class UserReservation extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchReservations();
        this.props.fetchRestaurants();
        this.props.fetchReviews();
        this.props.fetchFavorites();
    }

    render () {
        if (!(this.props.restaurants.length && this.props.reservations.length)) return null;

        const { currentUser, reservations, restaurants, reviews, favorites } = this.props;

        return (
            <div className="user-profile-page">
                <div className="user-profile-head">
                    <h1>{currentUser.first_name} {currentUser.last_name}</h1>
                </div>
                <div className="user-profile-body">
                    <UserSideMenu />
                    <div className="user-reservation-list">
                        <UserReservationIndex 
                            reservations={reservations}
                            restaurants={restaurants}
                            reviews={reviews}
                            currentUser={currentUser}
                            favorites={favorites}
                            createFavorite={createFavorite}
                            fetchFavorites={fetchFavorites}
                            deleteFavorite={deleteFavorite}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    reservations: Object.values(state.entities.reservations),
    restaurants: Object.values(state.entities.restaurants),
    reviews: Object.values(state.entities.reviews),
    favorites: Object.values(state.entities.favorites)
});

const mapDispatchToProps = dispatch => ({
    fetchReservations: () => dispatch(fetchReservations()),
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchReviews: () => dispatch(fetchReviews()),
    fetchFavorites: () => dispatch(fetchFavorites()),
    createFavorite: favorite => dispatch(createFavorite(favorite)),
    deleteFavorite: favoriteId => dispatch(deleteFavorite(favoriteId))

});

export default connect(mapStateToProps, mapDispatchToProps)(UserReservation);