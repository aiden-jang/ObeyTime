import React from 'react'
import { connect } from 'react-redux';
import { updateReservation } from '../../actions/reservation_actions';

class ReservationEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updatePhoneNumber = this.updatePhoneNumber.bind(this);
        this.updateSpecialRequest = this.updateSpecialRequest.bind(this);
        if (!this.props.location.state) {
            this.props.history.push('/');
            window.location.reload();
        }
        const { party_size, date, time, restaurant, currentUser} = this.props.location.state
        this.state = {
            id: this.props.location.state.reservationId,
            party_size,
            date,
            time,
            user_id: currentUser.id,
            restaurant_id: restaurant.id,
            email: currentUser.email,
            phone_number: 0,
            special_request: ""
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateReservation(this.state)
            .then(res => this.props.history.push(`/booking/view/${res.reservation.id}`));
    }
    updatePhoneNumber(e) {
        e.preventDefault();
        this.setState({phone_number: parseInt(e.target.value)})
    }
    updateSpecialRequest(e) {
        e.preventDefault();
        this.setState({special_request: e.target.value})
    }

    render () {
        const { party_size, date, time, restaurant, currentUser } = this.props.location.state
        return (
            <div className="reservation-confirm-form">
                <h1>You're almost done!</h1>
                <div className="reservation-confirm-form-overview">
                    <br />
                    <img src="" />
                    <h2>{restaurant.name}</h2>
                    <br />
                    <p>{date}</p>
                    <p>{time}</p>
                    <p>{party_size} people</p>
                    <br />
                </div>
                <form onSubmit={this.handleSubmit} className="reservation-confirm-form-info">
                    <h3>Diner details</h3>
                    <p>{currentUser.first_name} {currentUser.last_name} (<span>Not {currentUser.first_name}?</span>)</p>
                    <input type="text" placeholder="Phone number" onChange={this.updatePhoneNumber}/>
                    <input type="email" value={currentUser.email} readOnly/>
                    <br />
                    <textarea placeholder="Add a special request (optional)" onChange={this.updateSpecialRequest}/>
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
    updateReservation: (reservation) => dispatch(updateReservation(reservation)),
});

export default connect(null, mapDispatchToProps)(ReservationEditForm);