import React from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    data: {
        borderStyle: 'solid',
        borderRadius: '4px',
        borderColor: 'sky-blue',
        borderWidth: '1px',
        width: '100%',
        margin: '10px 0px auto ',
        padding: '5px'
    },
    dataItem: {
        padding: '5px',
        fontSize: '10px'
    }
}));
const DroneInfo = props => {
    const classes = useStyles();

    return (
        <div className={classes.data}>
            {(props.data !== null)?<Grid container >
                <Grid justify="flex-start" container className={classes.dataItem}>
                    <Typography>VTOL</Typography>

                </Grid>
                <Grid  md={6} sm={12} className={classes.dataItem}>
                    <span>Voltage</span>
                    <Typography>{props.data.volt}</Typography>
                </Grid>
                <Grid  md={6} sm={12} className={classes.dataItem}>
                    <span>Altitude</span>
                    <Typography>{parseFloat(props.data.altr).toFixed(2)}m</Typography>
                </Grid>
                <Grid  md={6} sm={12} className={classes.dataItem}>
                    <span>Speed</span>
                    <Typography>{parseFloat(props.data.gs).toFixed(2)}m/s</Typography>
                </Grid>
                <Grid  md={6} sm={12} className={classes.dataItem}>
                    <span>Latitude</span>
                    <Typography>{parseFloat(props.data.lat).toFixed(4)}</Typography>
                </Grid>
                <Grid  md={6} sm={12} className={classes.dataItem}>
                    <span>Longitude</span>
                    <Typography>{parseFloat(props.data.lng).toFixed(4)}</Typography>
                </Grid>
                <Grid  md={6} sm={12} className={classes.dataItem}>
                    <span>GPS</span>
                    <Typography>{props.data.numSat}</Typography>
                </Grid>
                <Grid  md={6} sm={12} className={classes.dataItem}>
                    <span>Status</span>
                    <Typography>{props.data.status}</Typography>
                </Grid>
                <Grid  md={6} sm={12} className={classes.dataItem}>
                    <span>Mode</span>
                    <Typography>{props.data.mode}</Typography>
                </Grid>
            </Grid>:null}
        </div>
    )
}

export default DroneInfo;