import React from 'react'; 

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
  }
  componentDidUpdate() {
    console.log(this.props.currentUser);
  }

  render () {     
    return (
      <div className="nav">
      { this.props.currentUser ? (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {this.props.currentUser.email}!</h2>
      <button className="header-button" onClick={this.props.logout}>Log Out</button>
    </hgroup>
      ) : (
        <nav className="login-signup">
        <button onClick={() => this.props.openModal('login')}>Login</button>
        &nbsp;or&nbsp;
        <button onClick={() => this.props.openModal('signup')}>Signup</button>
      </nav>
      )}

      </div>
    )
  }
}

export default Greeting;


// const Greeting = props => {
//   const { currentUser, logout, openModal } = props;
//   const sessionLinks = () => (
//     <nav className="login-signup">
//       <button onClick={() => openModal('login')}>Login</button>
//       &nbsp;or&nbsp;
//       <button onClick={() => openModal('signup')}>Signup</button>
//     </nav>
//   );

//   const personalGreeting = () => (
//     <hgroup className="header-group">
//       <h2 className="header-name">Hi, {currentUser.email}!</h2>
//       <button className="header-button" onClick={logout}>Log Out</button>
//     </hgroup>
//   );

//   return (
//     props.currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
//   );
// };

// export default Greeting;