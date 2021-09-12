import { fetchRestaurants } from './restaurant_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const removeFilter = filter => ({
  type: CLEAR_FILTER,
  filter
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchRestaurants(getState().ui.filters)(dispatch);
};

export const clearFilter = filter => (dispatch, getState) => {
  dispatch(removeFilter(filter));
  return fetchRestaurants(getState().ui.filters)(dispatch);
};