import React from 'react';
import { Link } from 'react-router-dom';

const UserReservationIndexItem = ({ reservation, restaurants, reviews, currentUser, deleteReview}) => {
    if (!restaurants.length) return null;

    const today = new Date().toISOString().slice(0, 10);

    const restaurant = restaurants.find(restaurant =>
        restaurant.id === reservation.restaurant_id);
    let review = {}
    if (reservation.date < today) {
    review = reviews.find(review =>
            restaurant.id === review.restaurant_id && currentUser.id === review.user_id);
    }

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
                ) : (review) ? (
                    <div>
                        <Link className="user-review-link-styling" to={{
                            pathname: '/feedback/edit',
                            state: {
                                review: review,
                                currentUser: currentUser,
                                restaurant: restaurant,
                                reservation: reservation
                            }
                        }}>
                        <h2>See/Edit your review</h2>
                        </Link>
                
                    </div>
                ) : (
                    <Link className="user-review-link-styling" to={{
                        pathname: '/feedback',
                        state: {
                            reservation: reservation,
                            restaurant: restaurant
                        }
                    }}>
                        <h2>Write Review</h2>
                    </Link>
                )
                }
                
            </div>
            <hr />
        </div>
    )
}

export default UserReservationIndexItem;