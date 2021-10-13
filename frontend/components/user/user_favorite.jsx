import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFavorites, deleteFavorite } from '../../actions/favorite_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import UserSideMenu from './user_side_menu';
import ReviewSearch from '../review/review_search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBookmark as fasBookmark
} from '@fortawesome/free-solid-svg-icons';

class UserFavorite extends React.Component {
    constructor(props) {
        super(props);
        this.removeFavorite = this.removeFavorite.bind(this);
    }

    componentDidMount() {
        this.props.fetchFavorites();
        this.props.fetchRestaurants();
    }

    removeFavorite(e) {
        e.preventDefault();
        this.props.deleteFavorite(e.target.value.id).then(res => this.props.fetchFavorites());
    }

    render () {
        if (!this.props.restaurants.length) return null;
        const { currentUser, restaurants } = this.props;
        const favorites = this.props.favorites.filter(favorite => 
            favorite.user_id === currentUser.id)
        
        return (
            <div className="user-profile-body">
                <div className="user-profile-head">
                    <h1>{currentUser.first_name} {currentUser.last_name}</h1>
                </div>
                <UserSideMenu
                    tab='favorite'
                />
                <div className="user-favorite">
                    <h1>Saved Restaurants</h1>
                    <hr />
                    { favorites.length >= 1 ? (
                        favorites.map(favorite => {
                            const restaurant = restaurants.find(restaurant => restaurant.id === favorite.restaurant_id);
    
                        return (
                            <div className="user-favorite-rest" key={favorite.id}>
                                <Link className="user-favorite-rest-link-styling" to={`/restaurants/${restaurant.id}`}>
                                    <img src={restaurant.photourl} />
                                </Link>
                                <div className="user-favorite-rest-content">
                                    <Link className="user-favorite-rest-link-styling" to={`/restaurants/${restaurant.id}`}>
                                        <h2>{restaurant.name}</h2>
                                    </Link>
                                    <button onClick={() => this.props.deleteFavorite(favorite.id).then(res => this.props.fetchFavorites())}>
                                        <FontAwesomeIcon className="user-fav-saved" icon={fasBookmark} />
                                        &nbsp;
                                        Remove from saved restaurants
                                    </button>
                                    <div className="user-favorite-stars">
                                    <ReviewSearch 
                                        restaurant={restaurant}
                                    />
                                    </div>
                                    
                                    <div className="user-favorite-rest-info">
                                        <p>{restaurant.cuisine}</p>
                                        <p>|</p>
                                        <p>{restaurant.neighborhood}</p>
                                    </div>

                                    
                                </div>
                                <Link className="user-favorite-reserve-now" to={`/restaurants/${restaurant.id}`}>
                                    <button>Reserve now</button>
                                </Link>
                                <hr />
                            </div>
                        )})
                    ) : (
                        <h2>You have no favorite restaurants to show on this list.</h2>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    restaurants: Object.values(state.entities.restaurants),
    favorites: Object.values(state.entities.favorites)
});

const mapDispatchToProps = dispatch => ({
    fetchFavorites: () => dispatch(fetchFavorites()),
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    deleteFavorite: favoriteId => dispatch(deleteFavorite(favoriteId))

});

export default connect(mapStateToProps, mapDispatchToProps)(UserFavorite);