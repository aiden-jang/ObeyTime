import React from 'react';
import { Link } from 'react-router-dom';

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
                    <div className="reservation-confirm-note">
                        <h1>Thanks {currentUser.first_name}! Your reservation is confirmed.</h1>
                    </div>
                    <div className="reservation-restaurant">
                        <img src="" />
                        <h2>{restaurant.name}</h2>

                        <p>{reservation.date}</p>
                        <p>{reservation.time.slice(11,16)}</p>
                        <p>{reservation.party_size} people</p>
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
                </div>
                <div className="reservation-side-user-info">
                    <h3>{currentUser.first_name} {currentUser.last_name}</h3>
                </div>
            </div>
        )
    }
}

export default ReservationShow;