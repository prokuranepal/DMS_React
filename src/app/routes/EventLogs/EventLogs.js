import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

function createData(index: number, eventId: number, source: string, description: string) {
    return { index, eventId, source, description };
}

export const rows = [
    createData(12, 4201, 'GSM', "Drone Max 720 has reached Dharan at 9:45 AM"),
    createData(11, 4202, 'GSM', "Drone Max 720 has been launched from Biratnagar at 7930 AM"),
    createData(10, 4203, 'GSM', "Nobel Health post ordered medicines at 9:15 AM"),
    createData(9, 4204, 'GSM', "Drone Max 712 dropped payload"),
    createData(8, 4201, 'GSM', "Drone Max 700 has reached Dharan at 8:45 AM"),
    createData(7, 4202, 'GSM', "Drone Max 700 has been launched from Biratnagar at 8:30 AM"),
    createData(6, 4203, 'GSM', "Nobel Health post ordered medicines at 8:15 AM"),
    createData(5, 4204, 'GSM', "Drone Max 722 dropped payload"),
    createData(4, 4201, 'GSM', "Drone Max 710 has reached Dharan at 7:45 AM"),
    createData(3, 4202, 'GSM', "Drone Max 710 has been launched from Biratnagar at 7:30 AM"),
    createData(2, 4203, 'GSM', "Nobel Health post ordered medicines at 7:15 AM"),
    createData(1, 4204, 'GSM', "Drone Max 732 dropped payload"),
];

const useStyles = makeStyles({
    table: {
        minWidth: 500,
    },
    root: {
        width: '90%',
        margin: 'auto',
        marginTop: '30px'
    }
});

const EventLog = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TableContainer component={Paper} >
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Index</StyledTableCell>
                            <StyledTableCell align="right">Event ID</StyledTableCell>
                            <StyledTableCell align="right">Source</StyledTableCell>
                            <StyledTableCell align="right">Description</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.index} data-test="rowsComp">
                                <StyledTableCell component="th" scope="row">
                                    {row.index}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.eventId}</StyledTableCell>
                                <StyledTableCell align="right">{row.source}</StyledTableCell>
                                <StyledTableCell align="right">{row.description}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default EventLog;