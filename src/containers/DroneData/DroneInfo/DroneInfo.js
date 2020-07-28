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
        width: '90%',
        margin: '5px 0px',
        padding: '5px'
    },
    dataItem: {
        padding: '5px',
        fontSize: '10px'
    }
}));
const DroneInfo = props => {
    const classes = useStyles();
    return(
        <div className={classes.data}>
                            <Grid container >
                                <Grid justify="flex-start" container className={classes.dataItem}>
                                    <Typography>VTOL</Typography>

                                </Grid>
                                <Grid sm={6} xs={12} className={classes.dataItem}>
                                    <span>Battery</span>
                                    <Typography>60%</Typography>
                                </Grid>
                                <Grid sm={6} xs={12} className={classes.dataItem}>
                                    <span>Altitude</span>
                                    <Typography>30m</Typography>
                                </Grid>
                                <Grid sm={6} xs={12} className={classes.dataItem}>
                                    <span>Speed</span>
                                    <Typography>10m/s</Typography>
                                </Grid>
                                <Grid sm={6} xs={12} className={classes.dataItem}>
                                    <span>Latitude</span>
                                    <Typography>27.1234</Typography>
                                </Grid>
                                <Grid sm={6} xs={12} className={classes.dataItem}>
                                    <span>Longitude</span>
                                    <Typography>85.1234</Typography>
                                </Grid>
                                <Grid sm={6} xs={12} className={classes.dataItem}>
                                    <span>GPS</span>
                                    <Typography>12</Typography>
                                </Grid>
                                <Grid sm={6} xs={12} className={classes.dataItem}>
                                    <span>Status</span>
                                    <Typography>Available</Typography>
                                </Grid>
                            </Grid>
                        </div>
    )
}

export default DroneInfo;