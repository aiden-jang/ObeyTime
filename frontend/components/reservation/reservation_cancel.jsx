import React from 'react';
import { connect } from 'react-redux';
import { deleteReservation } from '../../actions/reservation_actions'

const ReservationCancel = props => {
    console.log(props)
    return(
        <div className="reservation-cancel">
            <div className="reservation-cancel-head">
                <h1>Cancel Your Reservation</h1>
            </div>
            <h2></h2>
        </div>
    )
}


export default ReservationCancel;