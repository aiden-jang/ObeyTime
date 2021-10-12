import React from 'react';
import { Link } from 'react-router-dom';

class ReservationForm extends React.Component {
  constructor(props) {
      super(props);

      this.update = this.update.bind(this);
      this.handleClick = this.handleClick.bind(this);

      const today = new Date().toISOString().slice(0, 10);
      this.state = {
        party_size: 2,
        date: today,
        time: '18:00',
        displayTime: false
      };
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleClick (e) {
    e.preventDefault();
    if (!this.props.currentUser) {
      this.props.openModal('login');
    } else {
      this.setState({
        displayTime: true
      });
    }
  }

  convertTime (time) {
    let newTime = "";
    let hour = parseInt(time.slice(0,2));
    console.log(hour)
    if (hour >= 12) {
      hour -= 12;
      newTime = hour + time.slice(2,6) + " PM"
    } else {
      newTime = hour + time.slice(2,6) + " AM"
    }
    return newTime
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
                  <select className="reservation-input party" defaultValue="2" onChange={this.update('party_size')} >
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
                  <input className="reservation-input time" type="time" value={this.state.time} onChange={this.update('time')}/>
                </label>
                <br />
                          
                <label>Date
                  <br />
                  <input className="reservation-input date" value={this.state.date} min={this.state.date} type="date" onChange={this.update('date')} />
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
                      }
                    }>
                    <input type="submit" value={this.convertTime(this.state.time)} />
                  </Link>
                    ) : (
                  <input className="reservation-input-submit" type="submit" value="Find a Table" onClick={this.handleClick} />
                )}
              </div>
            </form>
        </div>
      </div>
    )
  }
}

export default ReservationForm;