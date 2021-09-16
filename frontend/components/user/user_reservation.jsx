import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchReservations } from '../../actions/reservation_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions'


class UserReservation extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchReservations();
        this.props.fetchRestaurants();
    }

    render () {
        if (!this.props.restaurants.length) return null;
        if (!this.props.reservations.length) return null;
        console.log(this.props)

        return (
            <div className="user-profile-page">
                <div className="user-profile-head">
                    <h1>USER RESERVATION PAGE</h1>
                </div>
                <div className="user-profile-body">
                    <div className="user-profile-side">
                        <Link className="user-profile-link-styling" to="/my/profile"><h2>Account Details</h2></Link>
                        <Link className="user-profile-link-styling" to="/my/reservations"><h2>Reservations</h2></Link>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    reservations: Object.values(state.entities.reservations),
    restaurants: Object.values(state.entities.restaurants)
});

const mapDispatchToProps = dispatch => ({
    fetchReservations: () => dispatch(fetchReservations()),
    fetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserReservation)