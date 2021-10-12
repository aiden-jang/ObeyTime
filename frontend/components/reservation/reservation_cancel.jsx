import React from 'react';
import { connect } from 'react-redux';
import { deleteReservation } from '../../actions/reservation_actions';
import { Link } from 'react-router-dom';

const ReservationCancel = props => {
    if (!props.location.state) {
        props.history.push('/');
        window.location.reload();
    }

    const convertTime = time => {
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

    const { reservation, restaurant, currentUser } = props.location.state;
    
    return(
        <div className="reservation-cancel">
            <div className="reservation-cancel-head">
                <h1>Cancel Your Reservation</h1>
            </div>
            <div className="reservation-cancel-background">
                <div className="reservation-cancel-container">
                    <div className="reservation-cancel-info">
                        <img src={restaurant.photoUrl} />
                        <div className="reservation-cancel-info-guests">
                            <h2>GUESTS</h2>
                            <p>{reservation.party_size} people</p>
                        </div>
                        <div className="reservation-cancel-info-date">
                            <h2>DATE</h2>
                            <p>{reservation.date}</p>
                        </div>
                        <div className="reservation-cancel-info-time">
                            <h2>TIME</h2>
                            <p>{convertTime(reservation.time)}</p>
                        </div>
                        <div className="reservation-cancel-info-rest">
                            <h2>RESTAURANT</h2>
                            <Link className="reservation-cancel-link"
                                to={{
                                pathname: `../restaurants/${restaurant.id}`,
                            }}>
                                <p>{restaurant.name}</p>
                            </Link>
                        </div>
                        <hr />
                        <Link to={{
                            pathname: '/book/cancel/confirm',
                            state: {
                                restaurantName: restaurant.name,
                                currentUser: currentUser,
                            }
                        }}>
                            <input type="submit" onClick={() => props.deleteReservation(reservation.id)} value='Cancel reservation' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
        deleteReservation: reservationId => dispatch(deleteReservation(reservationId))
});

export default connect(null, mapDispatchToProps)(ReservationCancel);