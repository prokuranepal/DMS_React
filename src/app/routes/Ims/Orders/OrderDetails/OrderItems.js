import React from 'react';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
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

let counter = 0;
function createData(itemId,name, dosages, type, quantity, exp_date) {
    counter += 1;
    return { id: counter,itemId, name, dosages, type, quantity, exp_date };
}

// const rows = [
//     createData(1, "Paracetamol", 500, "Tablet", 10, "2020-06-30"),
//     createData(2, "Cough Syrup", '-', "Liquid", 2, "2020-06-30"),
//     createData(3, "Brufen", 200, "Capsule", 10, "2020-06-30")
// ];

const useStyles = makeStyles((theme: Theme) =>
createStyles({
    root: {
        width: '100%',
    },
    table: {
        minWidth: 500,
        width: '95%',
        margin: 'auto',
    },
    paper: {
        margin: theme.spacing(1),
        padding: theme.spacing(1)
    },
})
);

const CustomizedTables = (props) => {
    const classes = useStyles();
    const rows = props.items.map(item => {
        return createData(item.medicine._id, item.medicine.title, item.medicine.dosages,item.medicine.type, item.medicine.quantity, item.medicine.exp_date)
    })
    // console.log(props.items);
    return (
        <div className={classes.root}>
            <Typography variant="h6">&nbsp;&nbsp;Ordered Items</Typography>
            <Paper className={classes.paper}>
                <TableContainer>
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

                                    <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.dosages}</StyledTableCell>
                                    <StyledTableCell align="right">{row.type}</StyledTableCell>
                                    <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                                    <StyledTableCell align="right">{row.exp_date}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}

export default CustomizedTables;