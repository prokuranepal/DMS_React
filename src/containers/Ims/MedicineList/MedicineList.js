import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    width: '80%',
    margin: 'auto',
  },
  addBtn: {
      marginTop: 50,
  },
});

function createData(name, stock) {
  return { name, stock };
}

const rows = [
  createData('Medicine 1', 159),
  createData('Medicine 2', 237),
  createData('Medicine 3', 262),
  createData('Medicine 4', 305),
  createData('Medicine 5', 356),
];

export default function SimpleTable() {
  const classes = useStyles();
  const editIcon = <EditIcon />;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Medicine Name</TableCell>
            <TableCell align="right">Stock</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.stock}</TableCell>
              <TableCell align="right">
                <Button>
                    {editIcon}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <Button className={classes.addBtn}>
            Add Medicine
        </Button>
      </Table>
    </TableContainer>
  );
}