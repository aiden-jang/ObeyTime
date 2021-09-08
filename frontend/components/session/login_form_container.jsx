import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import LogInForm from './login_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  demo: {
    email: "demo@mail.com",
    password: "password123"
  },
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  closeModal: () => dispatch(closeModal()),
  otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);