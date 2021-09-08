import React from 'react';
import NavBar from './main/nav_bar_container';
import Modal from './modal/modal';
import Home from './main/home';
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
    <header>
    <NavBar />
      <Route exact path="/" component={Home}/>
    </header>
  </div>
);

export default App;