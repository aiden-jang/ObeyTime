import React from 'react';
import { connect } from 'react-redux';
import { createReservation } from '../../actions/reservation_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser as farUser,
  faClock as farClock,
  faCalendar as farCalendar,
} from '@fortawesome/free-regular-svg-icons';

class ReservationConfirmForm extends React.Component {
  constructor(props) {
    super(props);

    if (!this.props.location.state) {
      this.props.history.push('/');
      window.location.reload();
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);

    const { party_size, date, time, restaurant, currentUser } = this.props.location.state;
    this.state = {
      party_size,
      date,
      time,
      user_id: currentUser.id,
      restaurant_id: restaurant.id,
      email: currentUser.email,
      phone_number: 1234567890,
      special_request: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReservation(this.state)
      .then(res => this.props.history.push(`/booking/view/${res.reservation.id}`));
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render () {
    const { party_size, date, time, restaurant, currentUser } = this.props.location.state;
      
    return (
      <div className="reservation-confirm-form">
        <h1>You're almost done!</h1>
        <br />

        <div className="reservation-confirm-form-overview">
          <img src={restaurant.photoUrl} />
          <h2>{restaurant.name}</h2>
          <br />
          
          <p><FontAwesomeIcon icon={farCalendar} /> {date}</p>
          <p><FontAwesomeIcon icon={farClock} /> {time}</p>
          <p><FontAwesomeIcon icon={farUser} /> {party_size} people</p>
          <br />  
        </div>
        <form onSubmit={this.handleSubmit} className="reservation-confirm-form-info">
          <h3>Diner details</h3>
          <p>{currentUser.first_name} {currentUser.last_name} (<span>Not {currentUser.first_name}?</span>)</p>
              
          <input type="text" placeholder="Phone number" onChange={this.update('phone_number')} required />
          <input type="email" value={currentUser.email} readOnly/>
          <br />
          <textarea placeholder="Add a special request (optional)" onChange={this.update('special_request')}/>
          <br />

          <input type="submit" value="Complete Reservation"/>
          <div className="reservation-confirm-form-terms">
            <p>By clicking “Complete reservation” you agree to the <span>ObeyTime Terms of Use</span> and <span>Privacy Policy</span>. </p>
          </div>
        </form>
        <div className="reservation-confirm-form-note">
          <h3>What to know before you go</h3>
          <h4>Important dining information</h4>
          <p>We may contact you about this reservation, so please ensure your email and phone number are up to date.</p>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    createReservation: (reservation) => dispatch(createReservation(reservation)),
});

export default connect(null, mapDispatchToProps)(ReservationConfirmForm);