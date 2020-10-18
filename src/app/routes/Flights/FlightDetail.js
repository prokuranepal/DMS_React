import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FlightInfo from './FlightInfo';
import FlightMap from './FlightMap';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBackRounded';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: 'auto'
    },
    paper: {
        width: '100%',
        margin: theme.spacing(1),
        padding: theme.spacing(2)
    },
    heading: {
        marginLeft: theme.spacing(7),
    }
}));

const info = {
    duration: '100 min',
    date: '27 August, 2020',
    startTime: '15:09:10',
    endTime: '16:49:00',
    origin: "Dharan",
    destination: "Biratnagar",
    missionId: '345',
    droneId: 'JT601',
    orderId: '123'

}

const mapDetails = {
        waypoints: [{
            action: "waypoint",
            altitude: 0,
            lat: -35.362935421360326,
            lng: 149.16551953867867,
            radius: 0
        },
        {
            action: "takeoff",
            altitude: "10",
            lat: -35.362935421360326,
            lng: 149.16551953867867,
            radius: "30"
        },
        {
            action: "waypoint",
            altitude: "20",
            lat: -35.36441071920064,
            lng: 149.16912420964968,
            radius: "30",
        },
        {
            action: "waypoint",
            altitude: "30",
            lat: -35.36302950005562,
            lng: 149.17195575058955,
            radius: "30"
        },
        {
            action: "waypoint",
            altitude: "40",
            lat: -35.35918294246014,
            lng: 149.1710548057451,
            radius: "30",
        },
        {
            action: "waypoint",
            altitude: "30",
            lat: -35.35853600340818,
            lng: 149.16732231996068,
            radius: "30"
        },
        {
            action: "waypoint",
            altitude: "20",
            lat: -35.36010962990983,
            lng: 149.16412611086943,
            radius: "30"
        },
        {
            action: "land",
            altitude: 0,
            lat: -35.3626623365603,
            lng: 149.1651986642558,
            radius: 0
        }
        ]
}


const FlightDetail = (props) => {
    const classes = useStyles();
    // const {flightDetails} = useSelector(({ flights }) => flights);
    const [redirect, setRedirect] = React.useState(null);
    useEffect(() => {
        if (props.location.state === undefined) {
            setRedirect(<Redirect to='/app/flights/flights' />)
        }
    }, [])

    return (
        <div className={classes.root}>
            <Grid container>
                {redirect}
                <Paper className={classes.paper}>
                    <Grid container>
                        <Grid item md={1} sm={1} xs={2} justify="flex-start" alignItems="flex-end" container>
                            <Link to='/app/flights/flights' style={{ textDecoration: 'none', color: 'white' }}>
                                <IconButton type="submit" aria-label="search">
                                    <ArrowBackIcon />
                                </IconButton>
                            </Link>
                        </Grid>
                        <Grid item lg={3} md={10} sm={10} xs={10} justify="flex-start" alignItems="center" container>
                            <Typography variant="h5">Flights</Typography>
                        </Grid>
                    </Grid>
                </Paper>

                <FlightInfo info={info} />
                <FlightMap mission={mapDetails} />
            </Grid>
        </div>
    )
}

export default FlightDetail;