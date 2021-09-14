import React from 'react';
import { Link } from 'react-router-dom';

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.updateTime = this.updateTime.bind(this);
        this.updatePartySize = this.updatePartySize.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            party_size: 2,
            date: '2021-12-24',
            time: '18:00',
            displayTime: false
        }
    }

    updateTime (e) {
        this.setState({ ...this.state, time: e.target.value })
    }

    updatePartySize(e) {
        this.setState({ ...this.state, party_size: parseInt(e.target.value) })
    }

    updateDate (e) {
        this.setState({ ...this.state, date: e.target.value })
    }

    handleClick (e) {
        e.preventDefault();
        if (!this.props.currentUser) {
            this.props.openModal('login');
        }
        else {
            this.setState({
                displayTime: true
            })
        }
    }

    render () {
        return (
            <div>
                <div className="reservation-form">
                    <form className="reservation-form-box">
                        <h3>Make a reservation</h3>
                        <hr />
                        <br/>
                        <div className="reservation-form-input">
                            <label>Party Size
                                <br />
                                <select className="reservation-input party" name="party_size" defaultValue="2" onChange={this.updatePartySize} >
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
                            </label>
                            <br />
                            <label>Time
                                <br />
                                <input className="search-input time" type="time" defaultValue={this.state.time} step="1800" onChange={this.updateTime}/>
                            </label>
                            <br />
                            <label>Date
                                <br />
                                <input className="reservation-input date" name="date" defaultValue={this.state.date} type="date" onChange={this.updateDate} />
                            </label>
                            <br />
                            
                            { this.state.displayTime ? (
                                <Link to={{
                                    pathname: '/booking/details',
                                    state: {
                                        party_size: this.state.party_size,
                                        date: this.state.date,
                                        time: this.state.time,
                                        restaurant: this.props.restaurant,
                                        currentUser: this.props.currentUser
                                    }
                                }}>
                                    <input type="submit" value={this.state.time} />
                                </Link>
                            ) : (
                                <input className="reservation-input-submit" type="submit" value="Find a Table" onClick={this.handleClick} />
                                )
                            }
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ReservationForm;