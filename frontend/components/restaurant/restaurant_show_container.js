import { connect } from 'react-redux'; 
import { fetchRestaurant } from '../../actions/restaurant_actions';
import RestaurantShow from './restaurant_show'; 
import { openModal } from '../../actions/modal_actions';
import { createFavorite, fetchFavorites, deleteFavorite } from '../../actions/favorite_actions';

const mapStateToProps = (state, ownProps) => ({
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
    currentUser: state.session.currentUser,
    favorites: Object.values(state.entities.favorites)
});

const mapDispatchToProps = dispatch => ({
    fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId)),
    openModal: modal => dispatch(openModal(modal)),
    createFavorite: favorite => dispatch(createFavorite(favorite)),
    fetchFavorites: () => dispatch(fetchFavorites()),
    deleteFavorite: favoriteId => dispatch(deleteFavorite(favoriteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);