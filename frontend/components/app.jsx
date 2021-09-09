import React from 'react';
import NavBar from './main/nav_bar_container';
import Modal from './modal/modal';
import Home from './main/home';
import Footer from './main/footer';
import SearchPage from './search/search_page';
import RestaurantShowContainer from './restaurant/restaurant_show_container'

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
      <Modal />
      <Route path='/' component={NavBar} />
      <Route exact path="/" component={Home}/>
      <Route exact path='/search' component={SearchPage} />
      <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
  </div>
);
//      <Route path='/' component={Footer} />

export default App;