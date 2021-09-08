import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
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
      <Link to="/" className="header-link">
        <h1>ObeyTime</h1>
      </Link>
      <GreetingContainer />
    </header>
  </div>
);

export default App;