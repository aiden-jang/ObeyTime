import React from 'react'
import { Link } from 'react-router-dom';

class ReservationModify extends React.Component {
    constructor(props) {
        super(props);
        if (!props.location.state) {
            props.history.push('/');
            window.location.reload();
        }
        this.modifyReservation = this.modifyReservation.bind(this);
        this.changeDate = this.changeDate.bind(this);
        this.changeTime = this.changeTime.bind(this);
        this.displayTime = this.displayTime.bind(this);
        this.state = this.props.location.state.reservation;
 
    }

    changeDate(e) {
        this.setState({date: e.target.value})
    }
    changeTime(e) {
        this.setState({time: e.target.value})
    }
    modifyReservation (e) {
        this.props.updateReservation(this.state)
        .then(this.props.history.push('/booking/details/edit'))
    }
    displayTime (e) {
        this.setState({displayTime: true})
    }
    render () {
        const {currentUser, restaurant, reservation} = this.props.location.state
    
        return(
            <div className="reservation-modify">
                <div className="reservation-modify-info">
                    <h1>Your current reservation</h1>
                <h2>{restaurant.name}</h2>
                <p>{this.state.date}</p>
                <p>{this.state.time.slice(11,16)}</p>
                <p>{this.state.party_size}</p>
                </div>
                <hr />
                <div className="reservation-modify-form">
                    <h2>Modify your reservation</h2>
                    <div className="reservation-modify-form-box">
                        <div className="reservation-modify-input">
                            <input className="reservation-modify date" value={this.state.date} onChange={this.changeDate} type="date" />
                            <select className="reservation-modify time" value={this.state.time} onChange={this.changeTime} >
                                <option value="5:30 PM">5:30 PM</option>
                                <option value="6:00 PM">6:00 PM</option>
                                <option value="6:30 PM">6:30 PM</option>
                                <option value="7:00 PM">7:00 PM</option>
                            </select>
                            <select className="reservation-modify party" defaultValue="2">
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
                                        reservationId: reservation.id
                                    }
                                }}>
                                    <input type="submit" value={this.state.time} />
                                </Link>
                            ) : (
                                <div></div>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReservationModify;