import * as APIUtil from '../util/reservation_api_utils';

export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';

export const receiveReservations = reservations => ({
    type: RECEIVE_RESERVATIONS, 
    reservations
});

export const receiveReservation = reservation => ({
    type: RECEIVE_RESERVATION,   
    reservation 
});

export const removeReservation = reservationId => ({
    type: REMOVE_RESERVATION,
    reservationId
});

export const fetchReservations = () => dispatch => (
    APIUtil.fetchReservations()
        .then(reservations => (dispatch(receiveReservations(reservations))))
);

export const fetchReservation = reservationId => dispatch => (
    APIUtil.fetchReservation(reservationId)
        .then(reservation => (dispatch(receiveReservation(reservation))))
);

export const createReservation = reservation => dispatch => (
    APIUtil.createReservation(reservation)
        .then(reservation => (dispatch(receiveReservation(reservation))))
);

export const updateReservation = reservation => dispatch => (
    APIUtil.updateReservation(reservation)
        .then(reservation => (dispatch(receiveReservation(reservation))))
);

export const deleteReservation = reservationId => dispatch => (
    APIUtil.deleteReservation(reservationId)
        .then(() => (dispatch(removeReservation())))
);