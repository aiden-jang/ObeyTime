import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {     
    return (
      <div className="nav">
        { this.props.currentUser ? (
          <hgroup className="header-group">
            <h2 className="header-name">Hello, {this.props.currentUser.email}!</h2>
            <button className="header-button" onClick={this.props.logout}>Log Out</button>
            <li>User Acccount</li>
            <li>Upcoming reservations</li>
            <li>Notification</li>
          </hgroup>
      ) : (
      <nav className="login-signup">
        <button onClick={() => this.props.openModal('signup')}>Signup</button>
        <button onClick={() => this.props.openModal('login')}>Login</button>
      </nav>
    )}
    </div>
    )
  }
}

export default NavBar;