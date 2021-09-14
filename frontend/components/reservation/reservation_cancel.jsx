import React from 'react';
import { connect } from 'react-redux';
import { deleteReservation } from '../../actions/reservation_actions'

const ReservationCancel = props => {
    const { reservation, currentUser, restaurant } = props.location.state

    const cancelReservation = e => {
        props.deleteReservation(reservation.id)
        .then(this.props.history.push('/book/cancel/confirm'))
    }
    return(
        <div className="reservation-cancel">
            <div className="reservation-cancel-head">
                <h1>Cancel Your Reservation</h1>
            </div>
            <h2>{restaurant.name}</h2>
            <button onClick={cancelReservation}> Cancel Reservation</button>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => { 
    return({
        deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId))    })
};

export default connect(null, mapDispatchToProps)(ReservationCancel);