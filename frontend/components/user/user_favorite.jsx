import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFavorites, deleteFavorite } from '../../actions/favorite_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';

import UserSideMenu from './user_side_menu';

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
        console.log(e.target.value)
        this.props.deleteFavorite(e.target.value.id).then(res => this.props.fetchFavorites());
    }

    render () {
        if (!this.props.restaurants.length) return null;
        const user = this.props.currentUser;
        const favorites = this.props.favorites.filter(favorite => 
            favorite.user_id === user.id)
        
        return (
            <div className="user-favorite-page">
                <UserSideMenu />
                {favorites.map(favorite => {
                    const restaurant = this.props.restaurants.find(restaurant => restaurant.id === favorite.restaurant_id);

                  return (
                      <div key={favorite.id}>
                            <Link className="user-reservation-rest-link-styling" to={`/restaurants/${restaurant.id}`}>
                                <h1>{restaurant.name}</h1>
                            </Link>
                            <input type="submit" value="Remove from saved restaurants" onClick={() => this.props.deleteFavorite(favorite.id).then(res => this.props.fetchFavorites())} />

                            <p>{restaurant.cuisine}</p>
                            <p>{restaurant.neighborhood}</p>
                            <Link className="user-reservation-rest-link-styling" to={`/restaurants/${restaurant.id}`}>
                                <button>Reserve now</button>
                            </Link>
                      </div>
                  )
                }
                )}
                   
                    
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