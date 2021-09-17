import React from 'react';
import { Link } from 'react-router-dom'; 
import NavBarProfile from './nav_bar_profile';

const NavBar = ({ currentUser, logout, openModal }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>
          <img src="https://obeytime-seeds.s3.amazonaws.com/logo.png" alt='Logo' />
        </Link>
      </div>

      <div className="user-features">
        { currentUser ? (
          <div className="singed-in">
            <NavBarProfile currentUser={currentUser} logout={logout}/>
          </div>
        ) : (
          <div className="login-signup">
            <button className="btn signup" onClick={() => openModal('signup')}>Sign up</button>
            <button className="btn login" onClick={() => openModal('login')}>Sign in</button>
          </div>
        )}
      </div>
    </div>
  )
};

export default NavBar;