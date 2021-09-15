import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser as farUser,
  faClock as farClock,
  faCalendar as farCalendar,
} from '@fortawesome/free-regular-svg-icons';
import {
    faCheckCircle as fasCheckCircle,
    faMapMarkerAlt as fasMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

class ReservationShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Promise.all([
            this.props.fetchReservation(this.props.match.params.reservationId)
        ]).then(() => {
            this.props.fetchRestaurant(this.props.reservation.restaurant_id)
        })
    }

    render () {
        if (!this.props.reservation) return null;
        if (Object.keys(this.props.restaurants).length === 0) return null;
        
        const {
            currentUser,
            reservation,
        } = this.props;
        const  restaurant  = this.props.restaurants[reservation.restaurant_id];
        
        if (currentUser.email !== reservation.email){
            this.props.history.push('/');
            window.location.reload();
        }
        
        return (
            <div className="reservation-show">
                <div className="reservation-confirm">
                    <div className="reservation-restaurant">
                        <img src="" />
                        <h2>{restaurant.name}</h2>
                        <div className="reservation-restaurant-confirm">
                            <p><FontAwesomeIcon  className="confirm" icon={fasCheckCircle} /> Reservation confirmed</p>
                        </div>
                        <p><FontAwesomeIcon icon={farCalendar} /> {reservation.date}</p>
                        <p><FontAwesomeIcon icon={farClock} /> {reservation.time}</p>
                        <p><FontAwesomeIcon icon={farUser} /> {reservation.party_size} people</p>
                        <Link to={{
                            pathname: '/book/modify',
                            state: {
                                reservation: reservation,
                                restaurant: restaurant,
                                currentUser: currentUser
                            },
                        }}>
                            <button>Modify</button>
                        </Link>
                        <Link to={{
                            pathname: '/book/cancel',
                            state: {
                                reservation: this.props.reservation,
                                restaurant: restaurant,
                                currentUser: currentUser
                            },
                        }}>
                            <button>Cancel</button>
                        </Link>
                    </div>
                    <div className="reservation-side-info">
                        <h2>What to know before you go</h2>
                        <h3>A note from the restaurant</h3>
                        <p>Thank you for choosing {restaurant.name}.
                        We are pleased to confirm your dining reservation made through ObeyTime. 
                        If you have a change of plans and need to cancel or reschedule, 
                        please let us know. We look forward to welcoming you!</p>
                    </div>
                </div>
                <div className="reservation-side-user-info">
                    <div className="reservation-side-user-info-content">
                        <h2><FontAwesomeIcon icon={farUser} /> {currentUser.first_name} {currentUser.last_name}</h2>
                        <h3><FontAwesomeIcon icon={fasMapMarkerAlt} />  {currentUser.primary_location}</h3>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default ReservationShow;