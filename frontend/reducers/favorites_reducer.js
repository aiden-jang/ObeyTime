import { RECEIVE_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorite_actions';

const favoritesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_FAVORITES:
            return action.favorites;
        case RECEIVE_FAVORITE:
            nextState[action.favorite.id] = action.favorite;
            return nextState;
        case REMOVE_FAVORITE:
            delete nextState[action.favoriteId];
            return nextState;
        default:
            return state;
    }
};

export default favoritesReducer;