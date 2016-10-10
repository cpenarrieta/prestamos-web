import _ from 'lodash';
import numeral from 'numeral';
import React, { PropTypes, Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import DetailsTable from './DetailsTable';

class QuoteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {selOpen: false, detalleOpen: false};
  }

  handleSelOpen = () => this.setState({selOpen: true});
  handleSelClose = () => this.setState({selOpen: false});
  handleDetalleOpen = () => this.setState({detalleOpen: true});
  handleDetalleClose = () => this.setState({detalleOpen: false});
  handleFinishQuote = () => this.props.finishQuote({quote: this.props.quote});

  render() {
    const {quote} = this.props;
    const imgBank = require(`../assets/images/${quote.bank}.png`);
    const actionsSeleccionar = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onTouchTap={this.handleSelClose}
      />,
      <FlatButton
        label="Continuar"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleFinishQuote}
      />,
    ];
    const actionsDetalle = [
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleDetalleClose}
      />
    ];

    return (
      <div>
        <Card className="quote-results-item">
          <CardMedia className="bank-img">
            <img src={imgBank} alt={quote.bank} />
          </CardMedia>
          <CardTitle title={`${quote.currency} ${numeral(quote.quote).format('0,0')}`}
            subtitle={numeral(quote.rate).format('0.0 %')} />
          <CardActions className="quote-results-buttons" >
            <FlatButton label="Detalle" onTouchTap={this.handleDetalleOpen} primary={true} />
            <RaisedButton label="Seleccionar" onTouchTap={this.handleSelOpen} primary={true} style={{marginRight: 0}} />
          </CardActions>
        </Card>
        <Dialog
          title="Confirma selección de este prestamo?"
          actions={actionsSeleccionar}
          modal={false}
          open={this.state.selOpen}
          onRequestClose={this.handleSelClose}
        >
          Al continuar, un funcionario del banco seleccionado se comunicara con usted en menos de 48 horas.
        </Dialog>
        <Dialog
          title="Detalle de cuotas"
          actions={actionsDetalle}
          modal={false}
          open={this.state.detalleOpen}
          onRequestClose={this.handleDetalleClose}
          autoScrollBodyContent={true}
        >
          <div style={{marginTop: "10px"}}>
            <DetailsTable details={quote.details} />
          </div>
        </Dialog>
      </div>
    );
  }
}

QuoteItem.propTypes = {
  onSubmit: PropTypes.func,
};

export default QuoteItem;
