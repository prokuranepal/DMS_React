import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        paper: {
            margin: theme.spacing(1),
            padding: theme.spacing(2)
        },
        text: {
            margin: theme.spacing(2),
        }
    }),
);
const OrderInfo = props => {
    const classes = useStyles();
    const info = props.info ? props.info : null
    return (
        <div className={classes.root}>
            
            <Paper className={classes.paper}>
            <Typography variant="h6">&nbsp;&nbsp;Flight Info</Typography>
                <Grid container>
                    <Grid className={classes.text} container row xs={12}>
                        <Grid item xs={4}>
                            <Typography variant="subtitle2">Drone ID</Typography>
                            <Typography>{info.droneId}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="subtitle2">Flight Duration</Typography>
                            <Typography>{info.duration}</Typography>

                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="subtitle2">Date</Typography>
                            <Typography>{info.date}</Typography>
                        </Grid>
                    </Grid>
                    <Grid className={classes.text} container item row xs={12}>
                    <Grid item xs={4}>
                            <Typography variant="subtitle2">Mission ID</Typography>
                            <Typography>{info.missionId}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="subtitle2">Start Time</Typography>
                            <Typography>{info.startTime}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="subtitle2">End Time</Typography>
                            <Typography>{info.endTime}</Typography>
                        </Grid>
                        
                    </Grid>
                    <Grid className={classes.text} container item row xs={12}>
                    <Grid item xs={4}>
                            <Typography variant="subtitle2">Order Id</Typography>
                            <Typography>{info.orderId}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="subtitle2">Origin</Typography>
                            <Typography>{info.origin}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="subtitle2">Destination</Typography>
                            <Typography>{info.destination}</Typography>
                        </Grid>
                        
                    </Grid>

                </Grid>
            </Paper>
        </div>
    )
}

export default OrderInfo;