import * as APIUtil from '../util/favorite_util';

export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const receiveFavorites = favorites => ({
    type: RECEIVE_FAVORITES,
    favorites
});

export const receiveFavorite = favorite => ({
    type: RECEIVE_FAVORITE,   
    favorite 
});

export const removeFavorite = favoriteId => ({
    type: REMOVE_FAVORITE,
    favoriteId
});

export const fetchFavorites = () => dispatch => (
    APIUtil.fetchFavorites()
        .then(favorites => (dispatch(fetchFavorites(favorites))))
);

export const createFavorite = favorite => dispatch => (
    APIUtil.createFavorite(favorite)
        .then(favorite => (dispatch(receiveFavorite(favorite))))
);

export const deleteFavorite = favoriteId => dispatch => (
    APIUtil.deleteFavorite(favoriteId)
        .then(() => (dispatch(removeFavorite())))
);