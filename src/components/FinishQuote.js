import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';

function FinishQuote(props) {
  const {finishResults} = props;
  const qrCodeImg = require('../assets/images/qr-code.png');

  return (
    <div className="finish-quote">
      <Paper zDepth={2} rounded={false} className="finish-quote-paper" >
        <h2 className="finish-quote-paper-item" >Prestamo Pre-Aprobado</h2>
        <span className="finish-quote-paper-item">Presente el siguiente codigo de confirmacion a un funcionario del banco</span>
        <h3 className="finish-quote-paper-item" >{finishResults.confirmationNumber}</h3>
        <img className="finish-quote-paper-item" src={qrCodeImg} alt="qr code" style={{height: "200px", width: "200px"}} />
        <a className="finish-quote-paper-item" href="">Descargar Confirmacion</a>
      </Paper>
    </div>
  )
}

FinishQuote.propTypes = {
  onSubmit: PropTypes.func,
};

export default FinishQuote;
