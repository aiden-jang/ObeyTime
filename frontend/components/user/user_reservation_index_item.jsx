import React from 'react';
import { Link } from 'react-router-dom';

const UserReservationIndexItem = ({ reservation, restaurants }) => {
    if (!restaurants.length) return null;

    const today = new Date().toISOString().slice(0, 10);

    const restaurant = restaurants.find(restaurant =>
        restaurant.id === reservation.restaurant_id);

    return (
        <div className="user-reservation-item">
            <img src={restaurant.photourl} />
            <div className="user-reservation-content">
                <Link className="user-reservation-rest-link-styling" to={`/restaurants/${restaurant.id}`}>
                    <h2>{restaurant.name}</h2>
                </Link>
                <p>{reservation.date} at {reservation.time} </p>
                <p>Table for {reservation.party_size} people.</p>
                { (reservation.date >= today) ? (
                    <Link className="user-reservation-resv-link-styling" to={`/booking/view/${reservation.id}`}>
                        <h2>View</h2>
                    </Link>
                ) : (
                    <Link className="user-review-link-styling" to={{
                        pathname: '/feedback',
                        state: {
                            restaurant: restaurant
                        }
                    }}>
                        <h2>Write Review</h2>
                    </Link>
                )}
            </div>
            <hr />
        </div>
    )
}

export default UserReservationIndexItem;