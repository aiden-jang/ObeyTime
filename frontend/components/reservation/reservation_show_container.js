import { connect } from 'react-redux';
import ReservationShow from './reservation_show';
import { fetchReservation } from '../../actions/reservation_actions';
import { fetchRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => ({
        reservation: state.entities.reservations[ownProps.match.params.reservationId],
        restaurants: state.entities.restaurants,
        currentUser: state.session.currentUser,
});


const mapDispatchToProps = dispatch => ({
    fetchReservation: reservationId => dispatch(fetchReservation(reservationId)),
    fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationShow);