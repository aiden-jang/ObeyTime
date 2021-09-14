import { connect } from 'react-redux';
import ReservationConfirmForm from './reservation_confirm_form';
import { createReservation, fetchReservations } from '../../actions/reservation_actions';

const mapStateToProps = (state) => {
    return({
        reservations: Object.values(state.entities.reservations)
    })
};

const mapDispatchToProps = (dispatch) => { 
    return({
        createReservation: (reservation) => dispatch(createReservation(reservation)),
        fetchReservations: () => dispatch(fetchReservations())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationConfirmForm);