import React from 'react';
import { Link } from 'react-router-dom';

class ReservationShow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        this.props.fetchReservation(this.props.match.params.reservationId)
        this.props.fetchRestaurants();
    }

    render () {
        if (!this.props.reservation) return null;
        const {
            currentUser,
            restaurants,
            reservation,
            updateReservation,
            deleteReservation
        } = this.props;
        if (!Object.values(restaurants).length) return null;
        return (
            <div>
                <div className="reservation-show">
                    
                    <div className="reservation-confirm">
                        <div className="reservation-confirm-note">
                        <h1>Thanks {currentUser.first_name}! Your reservation is confirmed.</h1>
                        </div>
                    <div className="reservation-restaurant">
                    <img src="" />
                    <h2>{restaurants[reservation.restaurant_id].name}</h2>

                    <p>{reservation.date}</p>
                    <p>{reservation.time.slice(11,16)}</p>
                    <p>{reservation.party_size} people</p>

                        <button onClick={this.handleModify}>Modify</button>
                        <Link to={{
                                pathname: '/book/cancel',
                                state: {
                                    reservation: this.props.reservation,
                                    restaurant: restaurants[reservation.restaurant_id],
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
            </div>
        )
    }
}

export default ReservationShow;