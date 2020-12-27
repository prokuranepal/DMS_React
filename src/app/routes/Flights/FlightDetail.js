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
import { useSelector } from 'react-redux';
import * as func from '../../../Functions/functions'


/**
 * This shows the details of a particular flight like drone used, mission followed, duration, time of flight etc
 * along with the waypoints in a map.
 * @returns {FlightDetail} - Returns a map and the flight info.
 * @argument {FlightDetail} - Flight ID
 */


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
    const { flightDetails } = useSelector(({ flights }) => flights);
    const [redirect, setRedirect] = React.useState(null);
    const [info, setInfo] = React.useState({
        duration: '100 min',
        date: '27 August, 2020',
        startTime: '15:09:10',
        endTime: '16:49:00',
        origin: "Dharan",
        destination: "Biratnagar",
        missionId: '345',
        droneId: 'JT601',
        orderId: '123'

    })

    //redirect to flight list page if the url of flight details is loaded without choosing the flight
    useEffect(() => {
        if (props.location.state === undefined) {
            setRedirect(<Redirect to='/app/flights/flights' />)
        }
    }, [])

    //load flight details to state and render it after it is fetched from the server
    useEffect(() => {
        console.log(flightDetails);
        if (flightDetails !== null) {
            const newInfo = {
                ...info,
                duration: func.getDuration(flightDetails.startTime,flightDetails.endTime),
                date: func.getDate(flightDetails.createdAt),
                startTime: func.getTime(flightDetails.startTime),
                endTime: func.getTime(flightDetails.endTime),
                origin: flightDetails.mission.hospital.name,
                destination: flightDetails.mission.destination.name,
                missionId: flightDetails.mission._id,
                droneId: flightDetails.drone.droneId,
                orderId: '123'
            }

            setInfo(newInfo);
        }

    }, [flightDetails])

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
                <FlightMap mission={flightDetails ? flightDetails.mission : mapDetails} />
            </Grid>
        </div>
    )
}

export default FlightDetail;