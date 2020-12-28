import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        paper: {
            height: '500px',
            margin: theme.spacing(1),
            padding: theme.spacing(2)
        },
        text: {
            marginBottom: theme.spacing(2),
        }
    }),
);

/**
 * This shows waypoints of a particular flight in a map.
 * @param {List} props.mission.waypoints- a list of waypoints of a given mission
 * @returns {FlightInfo} - Returns a map
 * 
 */

const FlightMap = (props) => {
    const classes = useStyles();
    const [home, setHome] = React.useState({ lat: -35.362935421360326, lng: 149.16551953867867 });

    useEffect(() => {
        if (props.mission.waypoints !== undefined && props.mission.waypoints !== null) {
            setHome(props.mission.waypoints[0])
        }
    }, [props.mission])
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
            <Typography className={classes.text} variant="h6">&nbsp;&nbsp;Flight Mission Map</Typography>
                
            <Map
                center={[home.lat, home.lng]}
                zoom={17}
                style={{ width: '100%', height: '90%', zIndex: 0 }}
                zoomControl={false}
            >

                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {props.mission !== null && props.mission !== undefined ? props.mission.waypoints.map((miss, i, array) => {
                    // console.log(miss);
                    return (<span key={i}><Marker
                        position={[miss.lat, miss.lng]}>
                        <Popup minWidth={90}>
                            <span >
                                <span>{miss.action} </span>
                                <br />
                                <span>Alt: {miss.altitude}m</span><br />
                            </span>
                        </Popup>
                    </Marker>
                        {/* for lines between markers */}
                        {array[i - 1] ? <Polyline weight={1} positions={[
                            [array[i - 1].lat, array[i - 1].lng], [array[i].lat, array[i].lng],
                        ]} color={'red'} /> : null}
                  }
                    </span>
                    )
                }) : null
                }
            </Map>
            </Paper>
        </div>
    )
}

export default FlightMap;