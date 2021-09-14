import { connect } from 'react-redux';
import ReservationShow from './reservation_show';
import { fetchReservation, updateReservation, deleteReservation } from '../../actions/reservation_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) =>{

    return ({
        reservation: state.entities.reservations[ownProps.match.params.reservationId],
        restaurants: Object.values(state.entities.restaurants),
        currentUser: state.session.currentUser,
    });
}


    
const mapDispatchToProps = dispatch => ({
        fetchReservation: reservationId => dispatch(fetchReservation(reservationId)),
        fetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationShow);