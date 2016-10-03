import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import QuoteView from '../components/QuoteView';
import actions from "../actions/index.js";

function QuoteViewContainer(props) {
  return (
    <QuoteView {...props}/>
  );
}

function mapStateToProps({quote}) {
  return {...quote};
}

function mapDispatchToProps(dispatch) {
  return {
    updateDni: (dni) => dispatch(actions.updateDni(dni)),
    updateEmail: (email) => dispatch(actions.updateEmail(email)),
    updateCelular: (celular) => dispatch(actions.updateCelular(celular)),
    updateQuote: (quote, hideSlider) => dispatch(actions.updateQuote(quote, hideSlider)),
    updateMoneda: (moneda) => dispatch(actions.updateMoneda(moneda)),
    updateShowSlider: () => dispatch(actions.updateShowSlider()),
    updateUbigeo: (ubigeo) => dispatch(actions.updateUbigeo(ubigeo)),
    updateFechaEmision: (fechaEmision) => dispatch(actions.updateFechaEmision(fechaEmision)),
  };
}

QuoteViewContainer.propTypes = {
  onSubmit: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteViewContainer);
