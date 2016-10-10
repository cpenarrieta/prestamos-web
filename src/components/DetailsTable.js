import _ from 'lodash';
import numeral from 'numeral';
import React, { PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

function DetailsTable(props) {
  const {details} = props;

  return (
    <Table fixedHeader={true} selectable={false} height={"300px"}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn># Cuota</TableHeaderColumn>
          <TableHeaderColumn>Fecha</TableHeaderColumn>
          <TableHeaderColumn>Interes</TableHeaderColumn>
          <TableHeaderColumn>Amortización</TableHeaderColumn>
          <TableHeaderColumn>Cuota</TableHeaderColumn>
          <TableHeaderColumn>Saldo</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
      {
        _.map(details, (d, key) => {
          return (
            <TableRow key={key}>
              <TableRowColumn>{d.numCuota}</TableRowColumn>
              <TableRowColumn>{d.fecha}</TableRowColumn>
              <TableRowColumn>{numeral(d.intereses).format('0,0.0')}</TableRowColumn>
              <TableRowColumn>{numeral(d.amortizacion).format('0,0.0')}</TableRowColumn>
              <TableRowColumn>{numeral(d.cuota).format('0,0.0')}</TableRowColumn>
              <TableRowColumn>{numeral(d.saldo).format('0,0.0')}</TableRowColumn>
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
