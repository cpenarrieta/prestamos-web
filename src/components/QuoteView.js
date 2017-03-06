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
  const { currency, amounts, amountSelected, updateAmount, updateCurrency,
    showSlider, quoteSubmit, updateShowSlider, doubleQuotes, term, updateTerm,
    updateDoubleQuotes, quotesResults, finishQuote, doReloadData
  } = props;

  function handleSelectAmount(e, amount) {
    e.preventDefault();
    updateAmount(amount, true);
    doReloadData();
  }

  function handleUpdateCurrency(e, currencySelected) {
    e.preventDefault();
    updateCurrency(currencySelected);
    doReloadData();
  }

  function handleOnChangeQuote(e, value) {
    updateAmount(value);
  }

  function handleOtherAmount(e) {
    e.preventDefault();
    updateShowSlider();
  }

  function handleOnChangeTerm(e, value) {
    updateTerm(value);
  }

  function handleOnChangeDoubleQuotes(e) {
    updateDoubleQuotes();
    doReloadData();
  }

  function handleQuoteSubmit(e) {
    quoteSubmit({currency, amountSelected, term, doubleQuotes});
  }

  return (
    <div className="quote">
      <Paper zDepth={2} rounded={false} className="quote-paper" >
      <h2 className="quote-paper-item">Cotice su Préstamo</h2>
        <div className="quote-paper-item quote-paper-row currency">
          <span className="currency-text">Moneda</span>
          <FlatButton
            id="soles-id"
            label="S/."
            primary={!(currency === "S/.")}
            secondary={currency === "S/."}
            onTouchTap={(e) => handleUpdateCurrency(e, "S/.")} />
          <FlatButton
            id="dollars-id"
            label="$"
            primary={!(currency === "$")}
            secondary={currency === "$"}
            onTouchTap={(e) => handleUpdateCurrency(e, "$")} />
        </div>
        <div className="quote-paper-item quote-paper-row quote-amounts">
          <span className="currency-text">Monto del Prestamo</span>
          {
            _.map(amounts, (amount, key) => {
              const isSelected = amountSelected === amount;
              return (<FlatButton
                        id={`soles-id-key`}
                        key={key}
                        label={`${currency} ${formatNum(amount)}`}
                        primary={!isSelected}
                        secondary={isSelected}
                        onTouchTap={(e) => handleSelectAmount(e, amount)} />)
            })
          }
          <FlatButton
            id="other-amount-id"
            label="otro monto"
            primary={!showSlider}
            secondary={showSlider}
            onTouchTap={handleOtherAmount}
          />
        </div>
        <div className={`quote-paper-item quote-paper-row quote-slider ${showSlider ? "slider-visible" : "slider-hidden"}`}>
          <span className="quote-text">{`${currency} ${formatNum(amountSelected)}`}</span>
          <Slider
            id="amount-id"
            className="quote-slider-item"
            step={1000}
            value={amountSelected}
            min={5000}
            max={300000}
            onChange={handleOnChangeQuote}
            onDragStop={doReloadData}
          />
        </div>
        <div className="quote-paper-item quote-paper-row quote-slider">
          <span className="currency-text text-center">Numero de cuotas</span>
          <span className="quote-text">{term}</span>
          <Slider
            id="cuotas-id"
            className="quote-slider-item-cuotas"
            step={1}
            value={term}
            min={3}
            max={60}
            onChange={handleOnChangeTerm}
            onDragStop={doReloadData}
          />
        </div>
        <div className="quote-paper-item quote-paper-row">
          <Toggle
            id="doble-cuotas-id"
            label="Cuotas Dobles (Julio / Diciembre)"
            defaultToggled={doubleQuotes}
            onToggle={handleOnChangeDoubleQuotes}
            labelStyle={{color: "#BDBDBD"}}
          />
        </div>
        <RaisedButton
          id="cotizar-id"
          label="Cotizar"
          primary={true}
          className="quote-paper-item btn-quote"
          onTouchTap={handleQuoteSubmit}
        />
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
