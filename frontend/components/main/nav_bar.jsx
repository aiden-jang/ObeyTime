import React from 'react';
import { Link } from 'react-router-dom'; 
import NavBarProfile from './nav_bar_profile';

const NavBar = props => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>
          <img src={window.logo} alt='Logo' />
        </Link>
      </div>

      <div className="user-features">
        { props.currentUser ? (
          <div className="singed-in">
            <NavBarProfile currentUser={props.currentUser} logout={props.logout}/>
          </div>
        ) : (
          <div className="login-signup">
            <button className="btn signup" onClick={() => props.openModal('signup')}>Sign up</button>
            <button className="btn login" onClick={() => props.openModal('login')}>Sign in</button>
          </div>
        )}
      </div>
      
      <div className="search-modal">
      </div>
    </div>
  )
}

export default NavBar;