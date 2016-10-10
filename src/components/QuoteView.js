import _ from 'lodash';
import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import QuoteItem from './QuoteItem';

function QuoteView(props) {
  const {moneda, quotes, quoteSelected, updateQuote, updateMoneda, showSlider, quoteSubmit,
    updateShowSlider, cuotasDobles, cuotas, updateCuotas, updateCuotasDobles,
    quotesResults, finishQuote
  } = props;

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

  function handleOnChangeCuotas(e, value) {
    updateCuotas(value);
  }

  function handleOnChangeCuotasDobles(e) {
    updateCuotasDobles();
  }

  function handleQuoteSubmit(e) {
    quoteSubmit({moneda, quoteSelected, cuotas, cuotasDobles});
  }

  return (
    <div className="quote">
      <Paper zDepth={2} rounded={false} className="quote-paper" >
      <h2 className="quote-paper-item">Cotice su Préstamo</h2>
        <div className="quote-paper-item quote-paper-row monedas">
          <span className="moneda-text">Moneda</span>
          <FlatButton label="S/." primary={!(moneda === "S/.")} secondary={moneda === "S/."} onTouchTap={(e) => handleUpdateMoneda(e, "S/.")} />
          <FlatButton label="$" primary={!(moneda === "$")} secondary={moneda === "$"} onTouchTap={(e) => handleUpdateMoneda(e, "$")} />
        </div>
        <div className="quote-paper-item quote-paper-row quote-amounts">
          <span className="moneda-text">Monto del Prestamo</span>
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
          <Slider className="quote-slider-item" step={1000} value={quoteSelected} min={5000} max={300000} onChange={handleOnChangeQuote} />
        </div>
        <div className="quote-paper-item quote-paper-row quote-slider">
          <span className="moneda-text text-center">Numero de cuotas</span>
          <span className="quote-text">{cuotas}</span>
          <Slider className="quote-slider-item-cuotas" step={1} value={cuotas} min={3} max={60} onChange={handleOnChangeCuotas} />
        </div>
        <div className="quote-paper-item quote-paper-row">
          <Toggle label="Cuotas Dobles (Julio / Diciembre)" defaultToggled={cuotasDobles} onToggle={handleOnChangeCuotasDobles} labelStyle={{color: "#BDBDBD"}} />
        </div>
        <RaisedButton label="Cotizar" primary={true} className="quote-paper-item btn-quote" onTouchTap={handleQuoteSubmit}/>
        <Divider />
        <div className="quote-results">
        {
          _.map(quotesResults, (quote, key) => {
            return (<QuoteItem quote={quote} key={key} finishQuote={finishQuote}></QuoteItem>)
          })
        }
        </div>
      </Paper>
    </div>
  );
}

function formatNum(num) {
  var n = num.toString(), p = n.indexOf('.');
  return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, function($0, i){
    return p<0 || i<p ? ($0+',') : $0;
  });
}

QuoteView.propTypes = {
  onSubmit: PropTypes.func,
};

export default QuoteView;
