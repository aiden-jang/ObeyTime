import React from 'react';
import { Link } from 'react-router-dom';


const UserSideMenu = props => {
    return (
        <div className="user-profile-side">
        <Link className="user-profile-link-styling" to="/my/reservations">
            <h2>Reservations</h2>
        </Link>
        <Link className="user-profile-link-styling" to="/my/favorites">
            <h2>Saved Restaurants</h2>
        </Link>
        <Link className="user-profile-link-styling" to="/my/profile">
            <h2>Account Details</h2>
        </Link>
    </div>
    )
}

export default UserSideMenu;