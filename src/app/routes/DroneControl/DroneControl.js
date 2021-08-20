import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DroneData from '../../../containers/DroneData/DroneData';
import RotatedMarker from '../../../homeComponents/RotatedMarker/RotatedMarker';
import { Map, TileLayer, Marker} from 'react-leaflet';
import { Icon } from "leaflet";
import Green from '../../../assets/green.png';
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
        height: '89vh'
    },
    meters: {
        fontSize: 20,
        margin: 'auto'
    },
    data: {
        zIndex: 500,
        position: 'relative',
        height: '100%'
    }
}));


/**
 * This shows a complete control system of flights of a drone. Here we can choose the drone we want 
 * to observe, upload a mission to the drone, see its real time location with other flight details and finally
 * fly, rtl and land the drone.
 * @returns {DroneControl} - Returns a map, dialog box and some flight details.
 * @argument {DroneControl} - No Arguments
 */
const DroneControl = props => {

    const classes = useStyles();
    const state = {
        lat: 26.818123,
        lng: 87.281345,
        zoom: 17,
    };
    const drone = new Icon({
        iconUrl: Green,
        iconSize: [25, 25]
    });
    return <Grid container className={classes.root} >
        <Map
            center={[state.lat, state.lng]}
            zoom={state.zoom}
            style={{ width: '100%', height: '100%', zIndex: 0 }}
            zoomControl={false}
        >
            <Grid container className={classes.data}>
                <Grid item xs={3}>
                    <DroneData />
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
            <TileLayer
                attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <RotatedMarker icon={drone} position={[state.lat, state.lng]} rotationAngle={70} rotationOrigin={'center'}/>
            
        </Map>

    </Grid>
}

export default DroneControl;