import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants_reducer';
import reservationsReducer from './reservations_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  user: usersReducer,
  restaurants: restaurantsReducer,
  reservations: reservationsReducer
});

export default entitiesReducer;