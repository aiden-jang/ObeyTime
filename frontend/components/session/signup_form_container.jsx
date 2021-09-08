import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SignUpForm from './signup_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal()),
  otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);