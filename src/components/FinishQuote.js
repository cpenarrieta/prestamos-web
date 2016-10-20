import numeral from 'numeral';
import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';

function FinishQuote(props) {
  const { finishResults } = props;
  const { bankName, currency, amount, quote, rate, term, code } = finishResults;
  const qrCodeImg = require('../assets/images/qr-code.png');

  return (
    <div className="finish-quote">
      <Paper zDepth={2} rounded={false} className="finish-quote-paper" >
        <h2 className="finish-quote-paper-item" >Prestamo Pre-Aprobado</h2>
        <span className="finish-quote-paper-item">{`Presente el siguiente codigo de confirmacion a un funcionario del banco ${bankName}.`}</span>
        <h3 className="finish-quote-paper-item" >{`Código unico: ${code}`}</h3>
        <h3 className="finish-quote-paper-item" >{`Monto: ${currency} ${numeral(amount).format('0,0')}`}</h3>
        <h3 className="finish-quote-paper-item" >{`Cuota Mensual: ${currency} ${numeral(quote).format('0,0')}`}</h3>
        <h5 className="finish-quote-paper-item" >{`TEA: ${numeral(rate).format('0.00 %')}`}</h5>
        <h5 className="finish-quote-paper-item" >{`Numero de cuotas: ${term}`}</h5>
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
