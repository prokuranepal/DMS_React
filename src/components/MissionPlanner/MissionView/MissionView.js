import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Map, TileLayer, Marker, Popup, Polyline, ZoomControl } from 'react-leaflet';
import MissionData from './MissionData/MissionData';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions/mission';

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
];


const MissionView = props => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [draggable, setDraggable] = React.useState(false);
    const [mission, setMission] = React.useState(missions);
    const [create, setCreate] = React.useState(false);
    const [currWaypointIndex, setCurrWaypointIndex] = React.useState(0);
    const openMissionDetail = useSelector(({ mission }) => mission.missionDetail);
    const state = {
        lat: 26.818123,
        lng: 87.281345,
        zoom: 17,
    }

    const [missionDetail, setMissionDetail] = React.useState({ name: '', radius: null, speed: null, lastAction: 'rth', waypoints: [] });
    const [currentWaypoint, setCurrentWaypoint] = React.useState({ altitude: null, radius: null, action: '', lat: null, lng: null })

    useEffect(() => {
        if (openMissionDetail !== null) {
            setMissionDetail(openMissionDetail);
            setCreate(true);
        }
    }, [openMissionDetail]);

    const toggleDraggable = () => {
        setDraggable(!draggable);
        // console.log(draggable, 'clicked');
    }

    const updatePosition = (event, index) => {

        if (event.target !== undefined && event.target !== null) {
            console.log(event.target.getLatLng());
            const m = { ...missionDetail };
            m.waypoints[index].lat = event.target.getLatLng().lat;
            m.waypoints[index].lng = event.target.getLatLng().lng;
            setMissionDetail(m);
            setCurrentWaypoint(m.waypoints[index]);
        }
    }

    const handleClick = (event) => {

        if (create) {
            if (event.latlng !== undefined && event.latlng !== null) {
                console.log(event.latlng);

                const m = { ...missionDetail };

                m.waypoints.push({
                    altitude: 0, radius: 0,
                    action: 'waypoint', lat: event.latlng.lat,
                    lng: event.latlng.lng
                });
                // console.log(mission, m);
                setCurrWaypointIndex(m.waypoints.length - 1);
                setCurrentWaypoint({ altitude: null, radius: null, action: 'waypoint', lat: event.latlng.lat, lng: event.latlng.lng });
                setMissionDetail(m);

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

    const createMission = () => {
        console.log("Create Mission");
        dispatch(actions.createMission(missionDetail));
    }

    const onChange = (event, key) => {
        console.log(event.target.value, key);
        console.log(currWaypointIndex);
        const m = {
            ...missionDetail,
        };
        m.waypoints[currWaypointIndex] = {
            ...m.waypoints[currWaypointIndex],
            [key]: event.target.value
        }
        console.log(m.waypoints[currWaypointIndex]);
        setMissionDetail(m);

    }

    const onChangeMission = (event, key) => {
        const m = {
            ...missionDetail,
            [key]: event.target.value
        };
        setMissionDetail(m);

    }

    const onClick = (index) => {
        console.log("Marker Clicked", index);
        setCurrWaypointIndex(index);
    }

    const openMission = () => {
        dispatch(actions.getMission());
    }
    return (
        <Grid container className={classes.root}>
            <Grid item xs={3}>
                <MissionData onChangeMission={onChangeMission} onChange={onChange} createMission={createMission} mission={missionDetail} waypoint={missionDetail.waypoints[currWaypointIndex]} onFinishMission={finishMission} onCreateMission={startMissionCreation} openMission={openMission} create={create} />
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
                    {missionDetail !== null && missionDetail !== undefined ?
                        missionDetail.waypoints.map((miss, i, array) => {
                            // console.log(miss);
                            return (<span key={i} onClick={toggleDraggable}><Marker
                                draggable={draggable}
                                onDragend={(event) => updatePosition(event, i)}
                                position={[miss.lat, miss.lng]}
                                onClick={() => onClick(i)}>
                                <Popup minWidth={90}>
                                    <span >
                                        <span>{miss.action} </span>
                                        <br />
                                        <span>Alt: {miss.altitude}m</span><br />
                                    </span>
                                </Popup>
                            </Marker>
                                {array[i - 1] ? <Polyline weight={1} positions={[
                                    [array[i - 1].lat, array[i - 1].lng], [array[i].lat, array[i].lng],
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