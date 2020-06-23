import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(sno, name, dosage, type, quantity, date) {
  return { sno, name, dosage, type, quantity, date};
}

const rows = [
  createData(1, "Paracetamol", 200, "Tablet", 50, "2020-06-30"),
  createData(2, "Paracetamol", 200, "Tablet", 50, "2020-06-30"),
  createData(3, "Paracetamol", 200, "Tablet", 50, "2020-06-30"),
  createData(4, "Paracetamol", 200, "Tablet", 50, "2020-06-30"),
  createData(5, "Paracetamol", 200, "Tablet", 50, "2020-06-30"),
  createData(6, "Paracetamol", 200, "Tablet", 50, "2020-06-30"),
  createData(7, "Paracetamol", 200, "Tablet", 50, "2020-06-30"),
  createData(8, "Paracetamol", 200, "Tablet", 50, "2020-06-30"),
  createData(9, "Paracetamol", 200, "Tablet", 50, "2020-06-30"),
  createData(10, "Paracetamol", 200, "Tablet", 50, "2020-06-30"),
];

const useStyles = makeStyles({
  root: {
    backgroundColor: 'white'
  },
  table: {
    minWidth: 500,
    width: '95%',
    margin: 'auto',
    marginTop: '10px'
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >S. No.</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Dosage&nbsp;(mg/ml)</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Expiration Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              
              <StyledTableCell component="th" scope="row">{row.sno}</StyledTableCell>
              <StyledTableCell align="right">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.dosage}</StyledTableCell>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}