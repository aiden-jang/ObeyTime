import React from 'react';
import { Link } from 'react-router-dom';

class UserReservation extends React.Component {
    render () {
        return (
            <div className="user-profile-page">
                <div className="user-profile-head">
                    <h1>USER RESERVATION PAGE</h1>
                </div>
                <div className="user-profile-body">
                    <div className="user-profile-side">
                        <Link className="link-styling" to="/my/profile"><h2>My Profile</h2></Link>
                        <Link className="link-styling" to="/my/reservations"><h2>My Reservations</h2></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserReservation;