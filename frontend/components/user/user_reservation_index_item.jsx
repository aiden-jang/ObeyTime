import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { deleteFavorite, createFavorite, fetchFavorites } from '../../actions/favorite_actions';

class UserReservationIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {setFavorite: false}
        this.addFavorite = this.addFavorite.bind(this);
        this.removeFavorite = this.removeFavorite.bind(this);
    }
    componentDidMount () {
        this.props.fetchFavorites();
    }

    componentDidUpdate () {
        const {reservation} = this.props
        const favorite = this.props.favorites.find(favorite =>
            favorite.restaurant_id === reservation.restaurant_id);
            if (favorite && !this.state.setFavorite)                 this.setState({setFavorite: true});
    }
    addFavorite(e) {
        e.preventDefault();
        const {reservation, currentUser } = this.props
        const restaurant = this.props.restaurants.find(restaurant =>
            restaurant.id === reservation.restaurant_id);
        this.props.createFavorite({
            user_id: currentUser.id,
            restaurant_id: restaurant.id
        }).then(this.props.fetchFavorites())
        this.setState({setFavorite: true});
    }

    removeFavorite(e) {
        e.preventDefault();
        const {currentUser, reservation } = this.props;
        const restaurant = this.props.restaurants.find(restaurant =>
            restaurant.id === reservation.restaurant_id);
        const favorite = this.props.favorites.find(favorite =>
            restaurant.id === favorite.restaurant_id && currentUser.id === favorite.user_id);
           
        this.props.deleteFavorite(favorite.id).then(res => this.props.fetchFavorites());
        
        this.setState({ setFavorite: false })

    }
    render () {
        if (!this.props.restaurants.length) return null;
        const {reservation, currentUser } = this.props
        const today = new Date().toISOString().slice(0, 10);
        const restaurant = this.props.restaurants.find(restaurant =>
            restaurant.id === reservation.restaurant_id);
        let review = {}
        if (reservation.date < today) {
        review = this.props.reviews.find(review =>
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
                    {console.log(this.state.setFavorite)}
                    { (this.props.favorites.find(favorite =>
            restaurant.id === favorite.restaurant_id && currentUser.id === favorite.user_id)) ? (
                        <div>
                        <input type="submit" value="Restaurant saved" onClick={this.removeFavorite} />
                        </div>
                    ) : (
                        <input type="submit" value="Save this restaurant" onClick={this.addFavorite} />
                    )}
                </div>
                <hr />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    favorites: Object.values(state.entities.favorites)
});

const mapDispatchToProps = dispatch => ({
    fetchFavorites: () => dispatch(fetchFavorites()),
    createFavorite: favorite => dispatch(createFavorite(favorite)),
    deleteFavorite: favoriteId => dispatch(deleteFavorite(favoriteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserReservationIndexItem);