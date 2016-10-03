import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginView from '../components/LoginView';
import actions from '../actions';

function LoginContainer(props) {
  return (
    <LoginView {...props} />
  );
}

function mapStateToProps({auth}) {
  return {...auth};
}

function mapDispatchToProps(dispatch) {
  return {
    setUsername: (username) => dispatch(actions.setUsername(username)),
    setPassword: (password) => dispatch(actions.setPassword(password)),
    submitLogin: () => dispatch(actions.submitLogin()),
    signin: (username, password, nextPath) => dispatch(actions.signin(username, password, nextPath))
  };
}

LoginContainer.propTypes = {
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  submitLogin: PropTypes.func.isRequired,
  signin: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
