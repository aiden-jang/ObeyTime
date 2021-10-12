import React from 'react';
import { Link } from 'react-router-dom';

const UserSideMenu = ({ tab }) => {
    return (
        <div className="user-profile-side">
        <Link className="user-profile-link-styling" to="/my/reservations">
            { (tab === 'reservation') ? (
                <h2 className="bold">Reservations</h2>
            ) : (
                <h2>Reservations</h2>
            )}
        </Link>
        <Link className="user-profile-link-styling" to="/my/favorites">
            { (tab === 'favorite') ? (
                <h2 className="bold">Saved Restaurants</h2>
            ) : (
                <h2>Saved Restaurants</h2>
            )}
        </Link>
        <Link className="user-profile-link-styling" to="/my/profile">
            { (tab === 'profile') ? (
                <h2 className="bold">Account Details</h2>
            ) : (
                <h2>Account Details</h2>
            )}
        </Link>
    </div>)
}

export default UserSideMenu;