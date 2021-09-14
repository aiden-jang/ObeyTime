import React from 'react';
import { connect } from 'react-redux';
import { deleteReservation } from '../../actions/reservation_actions'
import { Link } from 'react-router-dom';

const ReservationCancel = props => {
    if (!props.location.state) {
        props.history.push('/');
        window.location.reload();
    }

    const { reservation, restaurant, currentUser } = props.location.state

    return(
        <div className="reservation-cancel">
            <div className="reservation-cancel-head">
                <h1>Cancel Your Reservation</h1>
            </div>
            <div className="reservation-cancel-info">
                <img />
                <h2>GUESTS</h2>
                <p>{reservation.party_size}</p>
                <h2>DATE</h2>
                <p>{reservation.date}</p>
                <h2>TIME</h2>
                <p>{reservation.time}</p>
                <h2>RESTAURANT</h2>
                <p>{restaurant.name}</p>
            </div>

                                <Link to={{
                                    pathname: '/book/cancel/confirm',
                                    state: {
                                        restaurantName: restaurant.name,
                                        currentUser: currentUser,
                                    }
                                }}>
                                    <input type="submit" value='Cancel reservation' />
                                </Link>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
        deleteReservation: reservationId => dispatch(deleteReservation(reservationId))
});

export default connect(null, mapDispatchToProps)(ReservationCancel);