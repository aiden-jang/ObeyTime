import { connect } from 'react-redux';
import { login, signup, clearErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import SignUpForm from './signup_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  demo: {
    email: 'demo@mail.com',
    password: 'password123'
  }
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  loginDemo: demoUser => dispatch(login(demoUser)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);