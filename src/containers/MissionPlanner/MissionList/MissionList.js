import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',

        margin: '10px auto',
    },
    button: {
        margin: 'auto'
    },
    data: {
        margin: 'auto',
        marginLeft: '20px'
    },
    paper: {

        width: '90%',
        backgroundColor: '#5C9BDA',
        color: 'white',
        margin: `${theme.spacing(0.2)}px auto`,
        padding: theme.spacing(2),
    },
}));

/**
* A single drone in the drone list containing a label with a radio
*
* @param {AlphaNumeric} props.id - a unique ID of a mission
* @param {string} props.source - take-off place of the drone
* @param {Integer} props.destination - payload drop place of the drone
* @returns {MissionList} - It returns mission information with a view button
*/


const MissionList = props => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>

            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs={12} sm={8} md={10}>
                        <Typography data-test="id-component">Mission ID: {props.id}</Typography>
                        <Typography data-test="source-component">Source: {props.source}</Typography>
                        <Typography data-test="destination-component">Destination: {props.destination}</Typography>
                    </Grid>
                    <Grid container item xs={0} sm={4} md={2}>
                    <Link className={classes.button} to='/app/missionplanner/missionview' style={{textDecoration:'none', color: 'white'}}>
                        <Button variant="contained" color='secondary' >
                            View
                </Button>
                </Link>
                    </Grid>
                </Grid>
            </Paper>
            {/* </Paper> */}
        </Grid>)
}

export default MissionList;