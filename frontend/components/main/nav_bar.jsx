import React from 'react';
import { Link } from 'react-router-dom'; 
import NavBarProfile from './nav_bar_profile';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {     
    return (
      <div className="navbar">
        <div className="logo">
          <Link to={"/"}>OpenTable</Link>
        </div>
        <div className="user-features">
          { this.props.currentUser ? (
            <div className="singed-in">
              <NavBarProfile currentUser={this.props.currentUser} logout={this.props.logout}/>
            </div>
          ) : (
            <div className="login-signup">
              <button className="btn signup" onClick={() => this.props.openModal('signup')}>Sign up</button>
              <button className="btn login" onClick={() => this.props.openModal('login')}>Sign in</button>
            </div>
          )}
        </div>
        <div className="search">
        </div>
      </div>
    )
  }
}

export default NavBar;