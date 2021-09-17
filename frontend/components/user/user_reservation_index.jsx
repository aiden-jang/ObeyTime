import React from 'react';
import UserReservationIndexItem from './user_reservation_index_item';

const UserReservationIndex = ({reservations, restaurants, currentUser}) => {
    const today = new Date().toISOString().slice(0, 10);

    return (
        <div className="reservations">
            <div className="upcoming-reservations">
                <h2>Upcoming Reservations</h2>
                <hr />
                {reservations.slice().reverse().map(reservation => 
                    { if (reservation.user_id === currentUser.id && reservation.date >= today) 
                        return (
                            <UserReservationIndexItem
                                reservation={reservation}
                                restaurants={restaurants}
                                key={reservation.id}
                            />  
                        )
                    } 
                )}
            </div>
            <div className="past-reservations">
                <h2>Past Reservations</h2>
                <hr />
                {reservations.slice().reverse().map(reservation => 
                    { if (reservation.user_id === currentUser.id && reservation.date < today) 
                        return (
                            <UserReservationIndexItem
                                reservation={reservation}
                                restaurants={restaurants}
                                key={reservation.id}
                            />  
                        )
                    } 
                )}
            </div>
        </div>
    )
}

export default UserReservationIndex;