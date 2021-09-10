import { connect } from 'react-redux'; 
import { fetchRestaurant } from '../../actions/restaurant_actions';
import RestaurantShow from './restaurant_show'; 

const mapStateToProps = (state, ownProps) => ({
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId]
});

const mapDispatchToProps = dispatch => ({
    fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);