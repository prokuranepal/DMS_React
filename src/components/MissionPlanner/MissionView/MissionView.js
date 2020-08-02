import React, { createRef } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Map, TileLayer, Marker, Popup, Polyline, ZoomControl } from 'react-leaflet';
// import { Icon } from "leaflet";
// import Red from './red.png';
// import Marker from 'react-leaflet-enhanced-marker';
// import RotatedMarker from '../../RotatedMarker/RotatedMarker';
// import RotatedMarker from 'react-leaflet-rotatedmarker';
// import RotatedMarker from '../../UI/RotatedMarker/RotatedMarker';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '90vh'
    }
}));

const missions = [
    {
        id: 1,
        position: [26.816934, 87.280504],
        alt: 10,
        cmd: "Take Off"
    },
    {
        id: 2,
        position: [26.817748, 87.282604],
        alt: 50,
        cmd: "Waypoint 1"
    },
    {
        id: 3,
        position: [26.818862, 87.281604],
        alt: 50,
        cmd: "Waypoint 2"
    },
    {
        id: 4,
        position: [26.819576, 87.279304],
        alt: 0,
        cmd: "Land"
    }
];


const MissionView = props => {
    const refmarker = createRef();
    const classes = useStyles();
    const [draggable, setDraggable] = React.useState(true);
    const [mission, setMission] = React.useState(missions);
    const state = {
        lat: 26.818123,
        lng: 87.281345,
        zoom: 17,
    }

    const toggleDraggable = () => {
        setDraggable(!draggable);
        console.log(draggable, 'clicked');
    }

    const updatePosition = (event, index) => {
        // console.log( event.target.getLatLng());
        // const marker = refmarker.current
        if (event.target !== undefined && event.target !== null) {
            const m = [...mission];
            m[index].position = event.target.getLatLng();
            // console.log(mission, m);
            setMission(m);

            // setDraggable(false);
        }
    }

    const handleClick = (event) => {
        console.log(event.latlng);
        if (event.latlng !== undefined && event.latlng !== null) {
            const m = [...mission];
            m.push({
                id: mission.length,
                position: event.latlng,
                alt: 0,
                cmd: ""
            });
            // console.log(mission, m);
            setMission(m);
        }
    }

    return (
        <Grid container className={classes.root}>
            <Map
                center={[state.lat, state.lng]}
                zoom={state.zoom}
                style={{ width: '100%', height: '100%' }}
                zoomControl={false}
                onClick={handleClick}
            >
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {mission !== null && mission !== undefined ?
                    mission.map((miss, i, array) => {
                        // console.log(miss);
                        return (<span key={i} onClick={toggleDraggable}><Marker
                            draggable={draggable}
                            onDragend={(event) => updatePosition(event, i)}
                            position={miss.position}
                            ref={refmarker}>
                            <Popup minWidth={90}>
                                <span >
                                    <span>{miss.cmd} </span>
                                    <br />
                                    <span>Alt: {miss.alt}m</span><br />
                                </span>
                            </Popup>
                        </Marker>
                            {array[i - 1] ? <Polyline weight={1} positions={[
                                array[i - 1].position, array[i].position,
                            ]} color={'red'} /> : null}

                            }
                        </span>
                        )
                    }) : null
                }

                <ZoomControl position="topright" />
                {/* <RotatedMarker icon={drone} position={[state.lat, state.lng]} rotationAngle={70} rotationOrigin={'center'}/> */}
                {/* {
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
                } */}


            </Map>
        </Grid>)
}

export default MissionView;