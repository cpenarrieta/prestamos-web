import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginView from '../components/LoginView';
import actions from '../actions';
import HeaderNavContainer from '../containers/HeaderNavContainer';

function LoginContainer(props) {
  return (
    <div>
      <HeaderNavContainer isLogin />
      <LoginView {...props} />
    </div>
  );
}

function mapStateToProps({auth}) {
  return {...auth};
}

function mapDispatchToProps(dispatch) {
  return {
    updateDni: (dni) => dispatch(actions.updateDni(dni)),
    updateEmail: (email) => dispatch(actions.updateEmail(email)),
    updateCelular: (celular) => dispatch(actions.updateCelular(celular)),
    signin: (user) => dispatch(actions.signin(user)),
    updateUbigeo: (ubigeo) => dispatch(actions.updateUbigeo(ubigeo)),
    updateFechaEmision: (fechaEmision) => dispatch(actions.updateFechaEmision(fechaEmision)),
    updateFechaNacimiento: (fechaNacimiento) => dispatch(actions.updateFechaNacimiento(fechaNacimiento)),
    updateApellidos: (apellidos) => dispatch(actions.updateApellidos(apellidos)),
    updateNombre: (nombre) => dispatch(actions.updateNombre(nombre)),
  };
}

LoginContainer.propTypes = {
  signin: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
