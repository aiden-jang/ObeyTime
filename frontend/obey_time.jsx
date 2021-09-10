import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// TESTING
import { fetchRestaurant, fetchRestaurants } from './actions/restaurant_actions';
// END

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { 
        currentUser: window.currentUser
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  // TESTING
  window.getState = store.getState; 
  window.dispatch = store.dispatch;
  window.getState = store.dispatch;
  window.fetchRestaurants = fetchRestaurants;
  window.fetchRestaurant = fetchRestaurant;
  // END
});