import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser as farUser,
    faClock as farClock,
    faCalendar as farCalendar,
} from '@fortawesome/free-regular-svg-icons';

class ReservationModify extends React.Component {
    constructor(props) {
        super(props);

        if (!props.location.state) {
            props.history.push('/');
            window.location.reload();   
        }

        this.modifyReservation = this.modifyReservation.bind(this);
        this.update = this.update.bind(this);
        this.displayTime = this.displayTime.bind(this);
        this.state = this.props.location.state.reservation;
    }

    update(field) {
        return e => this.setState({
          [field]: e.target.value
        });
    }

    modifyReservation (e) {
        e.preventDefault();
        this.props.updateReservation(this.state)
            .then(this.props.history.push('/booking/details/edit'));
    }

    displayTime () {
        this.setState({displayTime: true});
    }

    convertTime (time) {
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

    render () {
        const {currentUser, restaurant, reservation} = this.props.location.state;

        return(
            <div className="reservation-modify">
                <div className="reservation-modify-info">
                    <h1>Your current reservation</h1>
                    
                    <img src={restaurant.photoUrl} />
                    <h2>{restaurant.name}</h2>

                    <p><FontAwesomeIcon icon={farCalendar} /> {reservation.date}</p>
                    <p><FontAwesomeIcon icon={farClock} /> {this.convertTime(reservation.time)}</p>
                    <p><FontAwesomeIcon icon={farUser} /> {reservation.party_size} People</p>
                </div>
                <hr />

                <div className="reservation-modify-form">
                    <h2>Modify your reservation</h2>
                    <div className="reservation-modify-form-box">
                        <div className="reservation-modify-input">
                            <input className="reservation-modify date" value={this.state.date} onChange={this.update('date')} type="date" />
                            <input className="reservation-modify time" value={this.state.time} onChange={this.update('time')} type="time" />
                            <select className="reservation-modify party" defaultValue="2" onChange={this.update('party_size')}>
                                <option value="1">1 person</option>
                                <option value="2">2 people</option>
                                <option value="3">3 people</option>
                                <option value="4">4 people</option>
                                <option value="5">5 people</option>
                                <option value="6">6 people</option>
                                <option value="7">7 people</option>
                                <option value="8">8 people</option>
                                <option value="9">9 people</option>
                                <option value="10">10 people</option>
                            </select>
                            <input className="reservation-modify submit" type="submit" value="Find a new table" onClick={this.displayTime} />
                            { this.state.displayTime ? (
                                <Link to={{
                                    pathname: '/booking/details/edit',
                                    state: {
                                        party_size: this.state.party_size,
                                        date: this.state.date,
                                        time: this.state.time,
                                        restaurant: restaurant,
                                        currentUser: currentUser,
                                        reservationId: reservation.id,
                                        special_request: this.state.special_request,
                                        phone_number: this.state.phone_number
                                    }
                                }}>
                                    <input className="reservation-modify-new-time" type="submit" value={this.convertTime(this.state.time)} />
                                </Link>
                            ) : (
                                null
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReservationModify;