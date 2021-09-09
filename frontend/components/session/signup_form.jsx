import React from 'react';
import { withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      primary_location: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this); 

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = Object.assign({}, this.props.demo);
    this.props.loginDemo(demoUser).then(this.props.closeModal);
  }


  renderErrors() {
    return(
      <ul className="session-errors">
        <br/>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <div onClick={this.props.closeModal} className="close-x">X</div>

          <h2>Welcome to ObeyTime!</h2>
          <hr/>
          {this.renderErrors()}
          <br/>

          <div className="session-form-container">
            <input type="text"
              value={this.state.first_name}
              onChange={this.update('first_name')}
              className="login-input"
              placeholder="First Name *"
            />
            <br/>
            <input type="text"
              value={this.state.last_name}
              onChange={this.update('last_name')}
              className="login-input"
              placeholder="Last Name *"
            />
            <br/>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
              placeholder="Enter email *"
            />
            <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder="Enter password *"
            />
            <br/>
            <select 
              value={this.state.primary_location}
              onChange={this.update('primary_location')}
              className="login-input">
              <option value="" selected disabled hidden>Primary Dining Location *</option>
              <option value="NYC">New York / Tri-State Area</option>
              <option value="SFB">San Francisco Bay Area</option>
              <option value="HI">Hawaii</option>
            </select>
            <br/>
            <input className="session-submit" type="submit" value="Create Account" />
            <hr/>
            <br/>
            <p className="alternative">Don't want to complete the form?</p>
            <br/>
            <button className="session-demo" onClick ={this.handleDemo}>Continue with Demo Account</button> 
          </div>
        </form>
        <br/>
        <br/>
      </div>
    );
  }
}

export default SignUpForm;