import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import LogInForm from './login_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  demo: {
    email: "demo@mail.com",
    password: "password123"
  }
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  closeModal: () => dispatch(closeModal()),
  otherForm: (
      <button className="session-new-signup" onClick={() => dispatch(openModal('signup'))}>
        Create an account
      </button>
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);