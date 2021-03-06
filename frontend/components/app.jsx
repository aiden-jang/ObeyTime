import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import NavBar from './main/nav_bar_container';
import Home from './main/home';
import SearchContainer from './search/search_container';
import RestaurantShowContainer from './restaurant/restaurant_show_container';
import UserProfile from './user/user_profile';
import UserReservation from './user/user_reservation';
import UserFavorite from './user/user_favorite';
import ReservationModify from './reservation/reservation_modify';
import ReservationCancel from './reservation/reservation_cancel';
import ReservationCancelConfirm from './reservation/reservation_cancel_confirm';
import ReservationConfirmForm from './reservation/reservation_confirm_form';
import ReservationEditForm from './reservation/reservation_edit_form';
import ReservationShowContainer from './reservation/reservation_show_container';
import ReviewCreateForm from './review/review_create_form';
import ReviewEditForm from './review/review_edit_form';
import Footer from './main/footer';

const App = () => (
  <div>
    <Modal />
    <Route path='/' component={NavBar} />
    <Route exact path='/' component={Home} />
    <Route exact path='/search' component={SearchContainer} />
    <Route exact path='/restaurants/:restaurantId' component={RestaurantShowContainer} />

    <Switch>
      <ProtectedRoute exact path ='/my/profile' component={UserProfile} />
      <ProtectedRoute exact path ='/my/reservations' component={UserReservation} />
      <ProtectedRoute exact path ='/my/favorites' component={UserFavorite} />
      <ProtectedRoute exact path ='/book/modify' component={ReservationModify} />
      <ProtectedRoute exact path ='/book/cancel' component={ReservationCancel} />
      <ProtectedRoute exact path ='/book/cancel/confirm' component={ReservationCancelConfirm} />
      <ProtectedRoute exact path ='/booking/details' component={ReservationConfirmForm} />
      <ProtectedRoute exact path ='/booking/details/edit' component={ReservationEditForm} />
      <ProtectedRoute exact path ='/booking/view/:reservationId' component={ReservationShowContainer} />
      <ProtectedRoute exact path ='/feedback' component={ReviewCreateForm} />
      <ProtectedRoute exact path ='/feedback/edit' component={ReviewEditForm} />
    </Switch>

    <Route path='/' component={Footer} />
  </div>
);

export default App;