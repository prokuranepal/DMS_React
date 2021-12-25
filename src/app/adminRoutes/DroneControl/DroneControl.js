import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DroneData from '../../../containers/DroneData/DroneData';
import RotatedMarker from '../../../homeComponents/RotatedMarker/RotatedMarker';
import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Icon } from "leaflet";
import Green from '../../../assets/green.png';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import url from '../../../url';
import io from 'socket.io-client';
import * as actions from '../../../store/actions/droneControl';
import * as missionActions from '../../../store/actions/mission';
import {AttitudeIndicator, HeadingIndicator} from 'react-flight-indicators';
import Dialog from '../../../homeComponents/Dialog/Dialog';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // backgroundColor: '#E7E7E7',
        backgroundColor: '#495057',
        // height: 'calc(100vh-64px)'
        height: '100vh'
    },
    data: {
        zIndex: 500,
        position: 'relative',
        height: '100%'
    }
}));

const droneIcon = new Icon({
    iconUrl: Green,
    iconSize: [25, 25]
});

/**
 * This shows a complete control system of flights of a drone. Here we can choose the drone we want 
 * to observe, upload a mission to the drone, see its real time location with other flight details and finally
 * fly, rtl and land the drone.
 * @param - No Parameters
 * @returns {DroneControl} - Returns a map, dialog box and some flight details.
 * 
 */

const DroneControl = ()  => {

    const classes = useStyles();
    const socket = useRef();
    const dispatch = useDispatch(); 

    const [openMissionList, setOpenMissionList] = React.useState(false);
    const [openCheckList, setOpenCheckList] = React.useState(false);
    const [openDroneList, setOpenDroneList] = React.useState(false);

    const [droneConnected, setDroneConnected] = React.useState(false);
    const [droneFirstConnected, setDroneFirstConnected] = React.useState(false);

    const [showMissionDetail, setShowMissionDetail] = React.useState(false);
    const [mission, setMission] = React.useState(null);
    const [enableFly, setEnableFly] = React.useState(false);

    const [droneInfo, setDroneInfo] = React.useState(null);
    const [drone, setDrone] = React.useState(null);

    const [home, setHome] = React.useState({ lat: 26.818123, lng: 87.281345 });
    const [positionList, setPositionList] = React.useState([]);
    const [missionState, setMissionState] = React.useState(null);
    const [dialogData, setDialogData] = React.useState({open: false, handleClose: null})
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [dialogMessage, setDialogMessage] = React.useState(null);
    const [command, setCommand] = React.useState(null);

    const activeDrones = useSelector(({ droneControl }) => droneControl.activeDrones);
    const userId = useSelector(({ auth }) => auth.userId);
    const missionDetail = useSelector(({ mission }) => mission.missionDetail);
    const checklistPass = useSelector(({droneControl}) => droneControl.checklistPass)

    

    //for loading mission from server
    useEffect(() => {
        setMissionState(missionDetail);
        
    }, [missionDetail]);

    //for loading mission from drone
    const setMissionDetail = (mission) => {
        console.log(mission)
        if (mission.waypoints !== undefined) {
            setMissionState({ ...missionState, ...mission }, () => console.log(missionState));
        }
    }

    //set the state for drone data along with its trajectory
    const setData = (data) => {
        
        setPositionList(arr => [...arr, {lat: data.lat, lng: data.lng}])
        setDroneInfo(data);
        console.log('data from ', data)
    }

    //set home position. it is retrieved only once while initially connecting to the drone
    const setHomePosition = (position) => {
        // console.log(position);
        setHome({
            ...home, lat: position.lat, lng: position.lng
        });
    }


    //set the socket route after choosing a drone
    useEffect(() => {
        // console.log(drone);
        if (drone !== null) {
            
            const d = new Date();
            const n = d.getMilliseconds();
            socket.current = io(`${url}/${drone}`);
            socket.current.emit("joinDMS", userId);
            socket.current.emit("homePosition", { timestamp: n })
            socket.current.on("copter-data", setData);
            socket.current.on("homePosition", setHomePosition)
            socket.current.on('getMission', setMissionDetail);
            socket.current.on('connect', () => {
                NotificationManager.info("Drone Connected");
                console.log("Connected Again");
                setDroneFirstConnected(true);
                setDroneConnected(true);
            })
            socket.current.on('payloadDrop', () => {
                NotificationManager.info("Payload Dropped");
            })
            socket.current.on('disconnect', (reason) => {
                // console.log(reason, "disconnected")
                NotificationManager.info("Drone Disconnected");
                
                // if (reason === 'io server disconnect' || reason === 'transport close disconnected') {
                // the disconnection was initiated by the server, you need to reconnect manually
                setDroneConnected(false);
                socket.current.connect();
                socket.current.emit("joinDMS", userId);
                // }
                // else the socket will automatically try to reconnect
            });
            return function cleanup() {
                setDroneConnected(false);
                console.log("Drone disconnect cleanup")
                socket.current.removeAllListeners();
                socket.current.disconnect();
            };
        }
    }, [drone, userId]);


    //handle opening the dialog box for mission list
    const handleOpenMission = () => {
        // console.log("Handle Open Mission");
        setOpenMissionList(true);
    };

    //handle closing the dialog box for mission list
    const handleCloseMission = () => {
        setOpenMissionList(false);
    };

    //handle opening the dialog box for checklist
    const handleOpenCheck = () => {
        // console.log("Handle Open Check");
        setOpenCheckList(true);
    };

    //handle closing the dialog box for checklist
    const handleCloseCheck = () => {
        setOpenCheckList(false);
    };

    //handle closing the dialog box for confirming if it is okay to do an action of fly, rtl or land
    const handleCloseDialog = () => {
        setDialogOpen(false)
    }

    //fetch the drones and show it in a dialog box after 'Choose Drone' is clicked
    const handleOpenDrone = () => {
        // console.log("Handle Open Drone");
        dispatch(actions.fetchActiveDrones());
        setOpenDroneList(true);
    };

    //handle closing the dialog box for drone selection
    const handleCloseDrone = () => {
        setOpenDroneList(false);
    };

    //select drone
    const selectDrone = (drone) => {
        setDrone(drone);
        setOpenDroneList(false);

    }

    //select mission
    const selectMission = (mission) => {
        // console.log(mission)
        setMission(mission);
        setOpenMissionList(false);
        dispatch(missionActions.getMission(mission));
        setShowMissionDetail(true);
        // socket.current.emit("mission",mission);
    }

    //upload mission
    const uploadMission = () => {
        // console.log(missionState);
        const d = new Date();
        const n = d.getMilliseconds();
        socket.current.emit("mission", { mission: mission, timestamp: n });
    }

    //download mission
    const onDownloadMission = () => {
        const d = new Date();
        const n = d.getMilliseconds();
        socket.current.emit("getMission", { timestamp: n })
        setShowMissionDetail(false);
        // console.log("sas",positionList);

    }

    //set the message to be shown in a dialog box for fly, rtl or land
    const setCommandMessage = (command) => {
        setCommand(command);
        let msg = '';
        switch(command){
            case "initiateFlight":
                msg = "Are you sure you want to initiate mission?"
                break;
                case "land":
                msg = "Are you sure you want to land the drone?"
                break;
                case "rtl":
                msg = "Are you sure you want to return to launch?"
                break;
            default:

        }
        // console.log("Inside command message")
        setDialogMessage(msg);
        setDialogOpen(true);
        // console.log(dialogMessage,"asas", dialogOpen, command)
    }

    //set a socket emit for fly, rtl or land
    const sendCommand = () => {
        // console.log("Inside send command ")
        setDialogOpen(false);
        const d = new Date();
        const n = d.getMilliseconds();
        socket.current.emit(command, { timestamp: n });
        setCommand(null);
    }

    return <Grid container className={classes.root} >
        <Grid item xs={3}>
            <DroneData
                onDownloadMission={onDownloadMission}
                // onStartMission={onStartMission}
                // onLand={onLand}
                // onRTL={onRTL}
                checklistPass={checklistPass}
                onStartMission={() => setCommandMessage("initiateFlight")}
                // onStartMission={onStartMission}
                onLand={() => setCommandMessage("land")}
                onRTL={() => setCommandMessage("rtl")}
                uploadMission={uploadMission}
                selectMission={selectMission}
                selectDrone={selectDrone}
                handleCloseDrone={handleCloseDrone}
                handleOpenDrone={handleOpenDrone}
                handleCloseCheck={handleCloseCheck}
                handleOpenCheck={handleOpenCheck}
                handleCloseMission={handleCloseMission}
                handleOpenMission={handleOpenMission}
                showMissionDetail={showMissionDetail}
                droneFirstConnected={droneFirstConnected}
                droneConnected={droneConnected}
                droneInfo={droneInfo}
                mission={missionDetail}
                openMissionList={openMissionList}
                openCheckList={openCheckList}
                openDroneList={openDroneList}
                activeDrones={activeDrones}

            />
        </Grid>
        <Grid item xs={9}>
            <Dialog open={dialogOpen} command={command} message={dialogMessage} handleClose={handleCloseDialog} agree={sendCommand}/>
            <NotificationContainer />
            <Map
                center={[home.lat, home.lng]}
                zoom={17}
                style={{ width: '100%', height: '100%'}}
                zoomControl={false}
            >
                <Grid container className={classes.data}>
                    <Grid item xs={9}>

                    </Grid>

                    <Grid item xs={3} container alignItems='flex-start' justify='flex-end' >
                        {droneInfo !== null ? <div><div><AttitudeIndicator size={130} roll={(droneInfo.roll * 180) / 3.14} pitch={(droneInfo.pitch * 180) / 3.14} showBox={false} /></div>
                            <div><HeadingIndicator size={130} heading={droneInfo.head} showBox={false} /></div>
                            </div> : null} 
                    </Grid>
                </Grid>
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {droneInfo !== null ? <RotatedMarker icon={droneIcon} position={[droneInfo.lat, droneInfo.lng]} rotationAngle={droneInfo.head} rotationOrigin={'center'} /> : null}

                {missionState !== null && missionState !== undefined ? missionState.waypoints.map((miss, i, array) => {
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
                  
                    </span>
                    )
                }) : null}
                {positionList.length !== 0 ? positionList.map((position,i, array) => {
                      return (
                        <span key={i}>
                            {array[i - 1] ? <Polyline weight={2} positions={[
                            [array[i - 1].lat, array[i - 1].lng], [array[i].lat, array[i].lng],
                        ]} color={'green'} /> : null}
                        </span>
                      )
                  }):null}
                
            </Map>
        </Grid>
    </Grid>
}

export default DroneControl;