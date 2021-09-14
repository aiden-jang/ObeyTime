import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants_reducer';
import reservationsReducer from './reservations_reducer';

const entitiesReducer = combineReducers({
  restaurants: restaurantsReducer,
  reservations: reservationsReducer
});

export default entitiesReducer;