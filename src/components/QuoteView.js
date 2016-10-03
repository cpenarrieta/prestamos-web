import _ from 'lodash';
import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';
import DatePicker from 'material-ui/DatePicker';

function QuoteView(props) {
  const {dni, email, celular, moneda, quotes, quoteSelected, updateDni, updateEmail,
    updateCelular, updateQuote, updateMoneda, showSlider, updateShowSlider, ubigeo,
    fechaEmision, updateUbigeo, updateFechaEmision
  } = props;

  function handleChangeDni(e) {
    updateDni(e.target.value);
  }

  function handleChangeEmail(e) {
    updateEmail(e.target.value);
  }

  function handleChangeCelular(e) {
    updateCelular(e.target.value);
  }

  function handleSelectQuote(e, quote) {
    e.preventDefault();
    updateQuote(quote, true);
  }

  function handleUpdateMoneda(e, monedaSelected) {
    e.preventDefault();
    updateMoneda(monedaSelected);
  }

  function handleOnChangeQuote(e, value) {
    updateQuote(value);
  }

  function handleOtroMonto(e) {
    e.preventDefault();
    updateShowSlider();
  }

  function handleChangeUbigeo(e) {
    updateUbigeo(e.target.value);
  }

  function handleFechaEmision(e, value) {
    updateFechaEmision(value);
  }

  return (
    <div className="quote">
      <Paper zDepth={2} rounded={false} className="quote-paper" >
      <h2 className="quote-paper-item">Cotice su Prestamo</h2>
        <div className="quote-paper-item quote-paper-row">
          <i className="material-icons quote-icon">person</i>
          <TextField hintText="Ingrese su DNI" floatingLabelText="DNI" type="number" value={dni} onChange={handleChangeDni}/>
        </div>
        <div className="quote-paper-item quote-paper-row">
          <i className="material-icons quote-icon">location_on</i>
          <TextField hintText="Ingrese Ubigeo de su Dni" floatingLabelText="Ubigeo" type="number" value={ubigeo} onChange={handleChangeUbigeo}/>
        </div>
        <div className="quote-paper-item quote-paper-row">
          <i className="material-icons quote-icon">event</i>
          <DatePicker className="" floatingLabelText="Fecha de Emision de Dni" hintText="Fecha de Emision de Dni" mode="landscape" value={fechaEmision} onChange={handleFechaEmision} />
        </div>
        <div className="quote-paper-item quote-paper-row">
          <i className="material-icons quote-icon">email</i>
          <TextField hintText="Ingrese su email" floatingLabelText="Email" value={email} onChange={handleChangeEmail}/>
        </div>
        <div className="quote-paper-item quote-paper-row">
          <i className="material-icons quote-icon">phone</i>
          <TextField hintText="Ingrese su celular" floatingLabelText="Celular" className="quote-paper-item" type="number" value={celular} onChange={handleChangeCelular}/>
        </div>
        <div className="quote-paper-item quote-paper-row monedas">
          <FlatButton label="S/." primary={!(moneda === "S/.")} secondary={moneda === "S/."} onTouchTap={(e) => handleUpdateMoneda(e, "S/.")} />
          <FlatButton label="$" primary={!(moneda === "$")} secondary={moneda === "$"} onTouchTap={(e) => handleUpdateMoneda(e, "$")} />
        </div>
        <div className="quote-paper-item quote-paper-row quote-amounts">
          {
            _.map(quotes, (quote, key) => {
              const isSelected = quoteSelected === quote;
              return (<FlatButton key={key} label={`${moneda} ${formatNum(quote)}`} primary={!isSelected} secondary={isSelected} onTouchTap={(e) => handleSelectQuote(e, quote)}/>)
            })
          }
          <FlatButton label="otro monto" primary={!showSlider} secondary={showSlider} onTouchTap={handleOtroMonto} />
        </div>
        <div className={`quote-paper-item quote-paper-row quote-slider ${showSlider ? "" : "slider-hidden"}`}>
          <span className="quote-text">{`${moneda} ${formatNum(quoteSelected)}`}</span>
          <Slider className="quote-slider-item" step={1000} value={quoteSelected} min={5000} max={150000} onChange={handleOnChangeQuote} />
        </div>
        <RaisedButton label="Cotizar" primary={true} className="quote-paper-item btn-quote"/>
      </Paper>
    </div>
  );
}

function formatNum(num){
  var n = num.toString(), p = n.indexOf('.');
  return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, function($0, i){
    return p<0 || i<p ? ($0+',') : $0;
  });
}

QuoteView.propTypes = {
  onSubmit: PropTypes.func,
};

export default QuoteView;
