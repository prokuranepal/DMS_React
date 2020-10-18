import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import { Map, TileLayer, Marker, Popup, Polyline, ZoomControl } from 'react-leaflet';
import MissionData from './MissionData/MissionData';
import MissionList from '../../MissionList/MissionList';
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
    paper: {
        backgroundColor: '#343a40',
        borderRadius: '10px',
        padding: theme.spacing(1, 1, 1, 1.3),
        color: 'white',
        width: '320px'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

}));

function getModalStyle() {
    const top = 40;
    const left = 0;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(${top}%, -${left}%)`,
    };
}

const MissionView = props => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const modalStyle = getModalStyle();
    const [openMissionList, setOpenMissionList] = React.useState(false);
    const [draggable, setDraggable] = React.useState(false);

    //to check if a new mission is being (created or edited) or not
    const [create, setCreate] = React.useState(false);
    const [currWaypointIndex, setCurrWaypointIndex] = React.useState(0);

    //set action to create to edit
    const [action, setAction] = React.useState("create");

    const openMissionDetail = useSelector(({ mission }) => mission.missionDetail);
    const loading = useSelector(({ mission }) => mission.loading);
    const [center, setCenter] = React.useState({
        lat: -35.36326217651367, lng: 149.1652374267578
    });
    const initialMissionDetail = { name: '', radius: null, speed: null, home: '', destination: '', waypoints: [] };
    const [missionDetail, setMissionDetail] = React.useState(initialMissionDetail);


    //to update the localstate by the missionDetails sourced from server
    useEffect(() => {
        if (openMissionDetail !== null) {
            console.log("Mission from server", openMissionDetail);
            setMissionDetail(openMissionDetail);
            setCreate(true);
            const c = openMissionDetail.waypoints[0]
            setCenter({
                ...center,
                lat: c.lat,
                lng: c.lng
            })
            setDraggable(true);
        }
    }, [openMissionDetail]);

    useEffect(() => {
        if(!loading) {
            setMissionDetail(initialMissionDetail);
            setAction('create');
        }
    },[loading]);

    //close the modal after choosing the mission
    const handleCloseMission = () => {
        setAction('create');
        setOpenMissionList(false);
    };

    //callback function to update position after the marker is dragged
    const updatePosition = (event, index) => {

        if (event.target !== undefined && event.target !== null) {
            console.log(event.target.getLatLng());
            const m = { ...missionDetail };
            m.waypoints[index].lat = event.target.getLatLng().lat;
            m.waypoints[index].lng = event.target.getLatLng().lng;
            setMissionDetail(m);
        }
    }

    //callback function for placing markers on the map and update the latitude and longitude of the waypoint
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
                setMissionDetail(m);

            }
        }
    }

    //on create mission
    const startMissionCreation = () => {
        setDraggable(true);
        setCreate(true);
        setAction('create');
    }


    //callback function for click on confirm button
    const createUpdateMission = () => {
        // console.log("Create Mission");
        setCreate(false);
        setDraggable(false);
        const newWaypoints = [...missionDetail.waypoints];
        const homeWaypoint = {
            altitude: 0, radius: 0,
            action: 'waypoint', lat: newWaypoints[0].lat,
            lng: newWaypoints[0].lng
        }
        newWaypoints.splice(0, 0, homeWaypoint);
        const newMissionDetail = {
            ...missionDetail,
            waypoints: newWaypoints
        }
        console.log(newWaypoints);
        if (action === 'create') {
            dispatch(actions.createUpdateMission(newMissionDetail, action));
        } else {
            dispatch(actions.createUpdateMission(missionDetail, action));
            
        }
        // setMissionDetail(initialMissionDetail);
        // setAction('create');

        
    }

    //callback function for change in parameter of a particular waypoint provided by index
    const onChange = (event, key) => {
        // console.log(event.target.value, key);
        // console.log(currWaypointIndex);

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

    //callback function for updating the change in details other than waypoints
    const onChangeMission = (event, key) => {
        const m = {
            ...missionDetail,
            [key]: event.target.value
        };
        console.log("value of m", m)
        setMissionDetail(m);

    }

    //callback function for click on a marker
    const onClick = (index) => {
        console.log("Marker Clicked", index);
        setCurrWaypointIndex(index);
        console.log(index, currWaypointIndex, "current waypoint")
    }

    //open mission list in a modal
    const openMission = () => {
        setOpenMissionList(true);
    }

    //set the mission details and waypoints to intial value of empty
    const onCancel = () => {
        setAction('create');
        setCreate(false);
        setDraggable(false);
        setMissionDetail(initialMissionDetail);
    }

    const selectMission = (missionId) => {
        setAction('edit');
        // console.log(missionId);
        dispatch(actions.getMission(missionId));
        setOpenMissionList(false);
    }

    const onDeleteWaypoint = () => {
        console.log(missionDetail.waypoints, currWaypointIndex)
        const deleteIndex = currWaypointIndex;
        let newIndex = currWaypointIndex;
        if (newIndex > 0) {
            newIndex = newIndex - 1
        } else {
            newIndex = 0
        }
        setCurrWaypointIndex(newIndex);
        const newWaypoints = [...missionDetail.waypoints]
        newWaypoints.splice(deleteIndex, 1);
        setMissionDetail({
            ...missionDetail,
            waypoints: newWaypoints
        })
    }
    console.log(create);
    return (
        <Grid container className={classes.root}>
            <Grid item xs={3}>
                <MissionData 
                data-test="missionData" action={action} onCancel={onCancel}
                    onChangeMission={onChangeMission} onChange={onChange}
                    createUpdateMission={createUpdateMission} mission={missionDetail}
                    waypoint={missionDetail.waypoints[currWaypointIndex]}
                    onCreateMission={startMissionCreation} openMission={openMission}
                    create={create}
                    onDeleteWaypoint={onDeleteWaypoint} />
            </Grid>
            <Grid item xs={9}>
                <Map
                    center={[center.lat, center.lng]}
                    zoom={17}
                    style={{ width: '100%', height: '100%' }}
                    zoomControl={false}
                    onClick={handleClick} data-test="mapComp"
                >

                    <TileLayer
                        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {missionDetail !== null && missionDetail !== undefined ?
                        missionDetail.waypoints.map((miss, i, array) => {
                            // console.log(miss);
                            return (<span key={i}><Marker
                                draggable={draggable}
                                onDragend={(event) => updatePosition(event, i)}
                                position={[miss.lat, miss.lng]}
                                data-test="markerComp"
                                onClick={() => onClick(i)}>
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

                    <ZoomControl position="topright" />
                </Map>
            </Grid>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openMissionList}
                onClose={handleCloseMission}
                closeAfterTransition
                data-test="modalComp"
            >
                <Fade in={openMissionList}>
                    <div className={classes.paper} style={modalStyle}>
                        <MissionList abort={handleCloseMission}  select={selectMission} data-test="missionList" />

                    </div>
                </Fade>
            </Modal>
        </Grid>)
}

export default MissionView;