import React, { createRef } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Map, TileLayer, Marker, Popup, Polyline, ZoomControl } from 'react-leaflet';
import MissionData from './MissionData/MissionData';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '89vh',
        backgroundColor: '#495057',
    },
    data: {
        zIndex: 500,
        position: 'relative',
        height: '100%'
    },

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
    const [draggable, setDraggable] = React.useState(false);
    const [mission, setMission] = React.useState(missions);
    const [create, setCreate] = React.useState(false);
    const state = {
        lat: 26.818123,
        lng: 87.281345,
        zoom: 17,
    }

    const toggleDraggable = () => {
        setDraggable(!draggable);
        // console.log(draggable, 'clicked');
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
        if (create) {
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
    }

    const startMissionCreation = () => {
        setDraggable(true);
        setCreate(true);
    }

    const finishMission = () => {
        setDraggable(false);
        setCreate(false);
    }

    return (
        <Grid container className={classes.root}>
            <Grid item xs={3}>
                <MissionData onFinishMission={finishMission} onCreateMission={startMissionCreation} openMission={startMissionCreation} create={create}/>
            </Grid>
            <Grid item xs={9}>
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
                </Map>
            </Grid>
        </Grid>)
}

export default MissionView;