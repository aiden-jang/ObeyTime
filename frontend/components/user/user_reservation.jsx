import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchReservations } from '../../actions/reservation_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import { fetchReviews } from '../../actions/review_actions';
import UserReservationIndex from './user_reservation_index';

class UserReservation extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchReservations();
        this.props.fetchRestaurants();
        this.props.fetchReviews();
    }

    render () {
        if (!(this.props.restaurants.length && this.props.reservations.length)) return null;

        const { currentUser, reservations, restaurants, reviews } = this.props;

        return (
            <div className="user-profile-page">
                <div className="user-profile-head">
                    <h1>{currentUser.first_name} {currentUser.last_name}</h1>
                </div>
                <div className="user-profile-body">
                    <div className="user-profile-side">
                        <Link className="user-profile-link-styling" to="/my/profile">
                            <h2>Account Details</h2>
                        </Link>
                        <Link className="user-profile-link-styling" to="/my/reservations">
                            <h2>Reservations</h2>
                        </Link>
                    </div>
                    <div className="user-reservation-list">
                        <UserReservationIndex 
                            reservations={reservations}
                            restaurants={restaurants}
                            reviews={reviews}
                            currentUser={currentUser}
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
    reviews: Object.values(state.entities.reviews)
});

const mapDispatchToProps = dispatch => ({
    fetchReservations: () => dispatch(fetchReservations()),
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchReviews: () => dispatch(fetchReviews())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserReservation);