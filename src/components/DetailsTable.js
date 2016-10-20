import _ from 'lodash';
import numeral from 'numeral';
import React, { PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

function DetailsTable(props) {
  const {details, quote, currency} = props;

  return (
    <Table fixedHeader={true} selectable={false} height={"300px"}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn># Cuota</TableHeaderColumn>
          <TableHeaderColumn>Fecha</TableHeaderColumn>
          <TableHeaderColumn>{`Interes (${currency})`}</TableHeaderColumn>
          <TableHeaderColumn>{`Amortización (${currency})`}</TableHeaderColumn>
          <TableHeaderColumn>{`Cuota (${currency})`}</TableHeaderColumn>
          <TableHeaderColumn>{`Saldo (${currency})`}</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
      {
        _.map(details, (d, key) => {
          return (
            <TableRow key={key}>
              <TableRowColumn>{d.i}</TableRowColumn>
              <TableRowColumn>{d.date}</TableRowColumn>
              <TableRowColumn>{numeral(d.interest).format('0,0.00')}</TableRowColumn>
              <TableRowColumn>{numeral(d.amortization).format('0,0.00')}</TableRowColumn>
              <TableRowColumn>{numeral(quote).format('0,0.00')}</TableRowColumn>
              <TableRowColumn>{numeral(d.balance).format('0,0.00')}</TableRowColumn>
            </TableRow>
          )
        })
      }
      </TableBody>
    </Table>
  )
}

DetailsTable.propTypes = {
  onSubmit: PropTypes.func,
};

export default DetailsTable;
