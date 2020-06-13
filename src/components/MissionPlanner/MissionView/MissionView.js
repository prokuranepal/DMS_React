import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Icon } from "leaflet";
import Red from './red.png';
// import RotatedMarker from 'react-leaflet-rotatedmarker';
// import RotatedMarker from '../../UI/RotatedMarker/RotatedMarker';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '93vh'
    }
}));

const mission = [
    {
        id: 1,
        lat: 26.816934,
        lng: 87.280504,
        alt: 10,
        cmd: "Take Off"
    },
    {
        id: 2,
        lat: 26.817748,
        lng: 87.281604,
        alt: 50,
        cmd: "Waypoint 1"
    },
    {
        id: 3,
        lat: 26.818862,
        lng: 87.281604,
        alt: 50,
        cmd: "Waypoint 2"
    },
    {
        id: 4,
        lat: 26.819576,
        lng: 87.279304,
        alt: 0,
        cmd: "Land"
    }
]

const MissionView = props => {
    const classes = useStyles();
    const state = {
        lat: 26.818123,
        lng: 87.281345,
        zoom: 17,
    }
    const drone = new Icon({
        iconUrl: Red,
        iconSize: [25, 25]
    });
    return (
        <Grid container className={classes.root}>
            <Map
                center={[state.lat, state.lng]}
                zoom={state.zoom}
                style={{ width: '100%', height: '93vh' }}
            >
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <RotatedMarker icon={drone} position={[state.lat, state.lng]} rotationAngle={180} rotationOrigin={'center'}/> */}
                {/* <Marker
                    icon={drone}
                    position={[state.lat, state.lng]}

                /> */}
                {
                    mission.map((point, i, array) => {

                        return <span key={i}><Marker
                            color="red"
                            position={[point.lat, point.lng]}

                        >
                            <Popup>
                                <span>{point.cmd} </span>
                                <br />
                                <span>Alt: {point.alt}m</span><br />
                            </Popup>
                        </Marker>
                            {array[i - 1] ? <Polyline weight={1} positions={[
                                [array[i - 1].lat, array[i - 1].lng], [array[i].lat, array[i].lng],
                            ]} color={'red'} /> : null
                            }
                        </span>
                    })
                }


            </Map>
        </Grid>)
}

export default MissionView;