import { connect } from 'react-redux'; 
import { fetchRestaurant } from '../../actions/restaurant_actions';
import RestaurantShow from './restaurant_show'; 
import { openModal } from '../../actions/modal_actions';
import { createFavorite } from '../../actions/favorite_actions';

const mapStateToProps = (state, ownProps) => ({
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
    currentUser: state.session.currentUser,
    favorite: state.entities.favorites
});

const mapDispatchToProps = dispatch => ({
    fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId)),
    openModal: modal => dispatch(openModal(modal)),
    createFavorite: favorite => dispatch(createFavorite(favorite))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);