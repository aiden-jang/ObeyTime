import React from 'react';
import { ProtectedRoute } from '../util/route_util';

import NavBar from './main/nav_bar_container';
import Modal from './modal/modal';
import Home from './main/home';
import Footer from './main/footer';
import SearchContainer from './search/search_container';
import RestaurantShowContainer from './restaurant/restaurant_show_container'
import ReservationConfirmForm from './reservation/reservation_confirm_form'
import ReservationShowContainer from './reservation/reservation_show_container'
import ReservationCancel from './reservation/reservation_cancel'
import ReservationCancelConfirm from './reservation/reservation_cancel_confirm'
import ReservationModify from './reservation/reservation_modify'
import ReservationEditForm from './reservation/reservation_edit_form'
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
      <Route exact path='/search' component={SearchContainer} />

<Switch>
      <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
      <ProtectedRoute exact path='/booking/details' component={ReservationConfirmForm} />

      <ProtectedRoute exact path='/book/modify' component={ReservationModify} />
      <ProtectedRoute exact path='/booking/details/edit' component={ReservationEditForm} />

      <ProtectedRoute exact path='/booking/view/:reservationId' component={ReservationShowContainer} />
    
      <ProtectedRoute exact path ="/reservations/:reservationId" component={ReservationShowContainer} />

      <ProtectedRoute exact path='/book/cancel' component={ReservationCancel} />
      <ProtectedRoute exact path='/book/cancel/confirm' component={ReservationCancelConfirm} />
  </Switch>

      <Route path='/' component={Footer} />
  </div>
);

export default App;