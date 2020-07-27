import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import DroneData from '../../../containers/DroneData/DroneData';
import {
    Airspeed,
    Altimeter,
    AttitudeIndicator,
    HeadingIndicator,
    TurnCoordinator,
    Variometer
  } from 'react-flight-indicators';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width: '100%',
      backgroundColor: '#E7E7E7',
      height: '85vh'
    },
    meters: {
        fontSize: 20,
        margin: 'auto'
    }
}));

const DroneControl = props => {
    
    const classes = useStyles();
    return <Grid container className={classes.root} >
        <Grid item xs={3}>
            <DroneData/>
        </Grid>
        <Grid item xs={3}>
        
        </Grid>
        <Grid item xs={3}>
        
        </Grid>
        <Grid item xs={3} container alignItems='flex-end' >
        <AttitudeIndicator size={120} roll={30} pitch={0} showBox={false} />
        <HeadingIndicator size={120} heading={0} showBox={false} />
        </Grid>
        
    </Grid>
}

export default DroneControl;