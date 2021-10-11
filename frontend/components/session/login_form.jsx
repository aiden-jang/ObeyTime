import React from 'react';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this); 
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.clearErrors();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(this.props.closeModal);
  }

  handleDemo(e) {
    e.preventDefault();
    
    this.props.clearErrors();
    const demoUser = Object.assign({}, this.props.demo);
    this.props.processForm(demoUser)
      .then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="session-form">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div onClick={this.props.closeModal} className="close-x">
            X
          </div>

          <h2>Please sign in</h2>
          <hr/>
          <div className="session-form-errors">
            {this.renderErrors()}
          </div>
          <br/>

          <div className="session-form-container">
            <input type="email"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
              placeholder="Email"
            />
            <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder="Password"
            />
            <br/>

            <input className="session-submit" type="submit" value="Sign In" />
            <hr/>
            <br/>
            
            <p className="alternative">Don't want to complete the form?</p>
            <br/>
            <button className="session-demo" onClick ={this.handleDemo}>Continue with Demo Account</button> 
          </div>
        </form>
        <p className="login-input-new">New to ObeyTime? {this.props.otherForm} </p>
      </div>
    );
  }
}

export default LogInForm;