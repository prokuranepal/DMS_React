import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width: '100%',
      backgroundColor: '#E7E7E7'
    },
    text: {
        fontSize: 20,
        margin: 'auto'
    }
}));

const Weather = props => {
    const classes = useStyles();
    return <Grid container className={classes.root} >
        <Typography className={classes.text}>Weather</Typography>
    </Grid>
}

export default Weather;