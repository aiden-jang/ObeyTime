import React from 'react'

const ReservationCancelConfirm = props => {
    const {currentUser, restaurantName } = props.location.state
    return (
        <div>
            <h1>{currentUser.first_name}, your reservation has been canceled</h1>
            <h2>You can still get great food, and support {restaurantName}.</h2>
        </div>
    )
}

export default ReservationCancelConfirm