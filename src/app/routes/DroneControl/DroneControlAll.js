import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DroneData from '../../../containers/DroneData/DroneData';
import RotatedMarker from '../../../homeComponents/RotatedMarker/RotatedMarker';
import { Map, TileLayer, Marker, Popup, Polyline, Tooltip, Circle } from 'react-leaflet';
import { Icon } from "leaflet";
import Green from '../../../assets/green.png';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import url from '../../../url';
import io from 'socket.io-client';
import RestrictedRegion from './RestrictedRegion';
import * as actions from '../../../store/actions/droneControl';
import * as actionsDashboard from '../../../store/actions/dashboard'

import * as missionActions from '../../../store/actions/mission';
import {AttitudeIndicator, HeadingIndicator} from 'react-flight-indicators';
import Dialog from '../../../homeComponents/Dialog/Dialog';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // backgroundColor: '#E7E7E7',
        backgroundColor: '#495057',
        height: 'calc(100vh-64px)'
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
 * @returns {DroneControlAll} - Returns a map, dialog box and some flight details.
 * 
 */

const DroneControlAll = ()  => {

    const classes = useStyles();
    const socket = useRef();
    const dispatch = useDispatch(); 
    

    const [droneInfo, setDroneInfo] = React.useState(null);
    const nameUIN=[{name:'Harihar Shrestha',uin:'NP-A7347634', model:'DJI Mavic'},
                    {name:'Dilliraj Manandhar',uin:'NP-A7347634', model:'DJI Phantom'},
                    {name:'Sunil Chaudhary',uin:'NP-A7347634', model:'DJI Mavic'},
                    {name:'Suraj Pokhrel',uin:'NP-A7347634', model:'DJI Inspire'},
                    {name:'Ganesh Bastola',uin:'NP-A7347634', model:'DJI Mavic'}]
    // const [droneInfoArray, setDroneInfoArray] = React.useState([{name:'JT601',model:'DJI inspire',ownerName:'Harihar Shrestha', uin:'NA-32432434',data:{ lat: 28.279858, lng: 84.015485 ,heading:30}}]);

    const [droneInfoArray, setDroneInfoArray] = React.useState([]);

     
    const [home, setHome] = React.useState({ lat: 28.279858, lng: 84.015485 });
    const [positionList, setPositionList] = React.useState([]);
    // const [missionState, setMissionState] = React.useState(null);
    // const [dialogData, setDialogData] = React.useState({open: false, handleClose: null})
    // const [dialogOpen, setDialogOpen] = React.useState(false);
    // const [dialogMessage, setDialogMessage] = React.useState(null);
    // const [command, setCommand] = React.useState(null);

    const activeDrones = useSelector(({ droneControl }) => droneControl.activeDrones);
    const userId = useSelector(({ auth }) => auth.userId);
    const missionDetail = useSelector(({ mission }) => mission.missionDetail);
    const checklistPass = useSelector(({droneControl}) => droneControl.checklistPass)


    useEffect(() => {
        dispatch(actions.fetchActiveDrones());
    }, [dispatch])
   

 

    useEffect(() => {
        if(activeDrones){
            activeDrones.map((drone,ind)=>{
                let newSocket = io(`${url}/${drone.name}`)
                newSocket.emit("joinDMS", userId)
                newSocket.on('copter-data',data=>{
                        // let droneInformation=droneInfoArray.filter(uav=>uav.name===drone.name)
                        let index = droneInfoArray.findIndex(x => x.name ===drone.name);
                        if(index!=null){
                            setDroneInfoArray(oldArray => [...oldArray, {name:drone.name, model:nameUIN[ind].model, uin:nameUIN[ind].uin,ownerName:nameUIN[ind].name,data:data}]);

                        }
                        else{
                            let newArray=[...droneInfoArray];
                            newArray[index]={...newArray[index],data:data};
                            setDroneInfoArray(newArray);
                        }
                        // setDroneInfo()
                    
                    // console.log("data from drone", data, drone.name)

                })
                 socket.on('disconnect', (reason) => {
                // console.log(reason, "disconnected")
                NotificationManager.info("Drone Disconnected");
                
                // if (reason === 'io server disconnect' || reason === 'transport close disconnected') {
                // the disconnection was initiated by the server, you need to reconnect manually
                socket.connect();
                socket.emit("joinDMS", userId);
                // }
                // else the socket will automatically try to reconnect
            });
                // socketArray.push(newSocket);

            })
        }

    }, [userId, activeDrones]);
  

    return <Grid container className={classes.root} >
  
        <Grid item xs={12} style={{height:'100vh'}}>
            {/* <Dialog open={dialogOpen} command={command} message={dialogMessage} handleClose={handleCloseDialog} agree={sendCommand}/> */}
            {/* <NotificationContainer /> */}
            <Map
                center={[home.lat, home.lng]}
                zoom={8}
                style={{ width: '100%', height: '100%'}}
                zoomControl={true}
            >
                {/* <Grid container className={classes.data}>
                    <Grid item xs={9}>

                    </Grid>

                    <Grid item xs={3} container alignItems='flex-start' justify='flex-end' >
                        {droneInfo !== null ? <div><div><AttitudeIndicator size={130} roll={(droneInfo.roll * 180) / 3.14} pitch={(droneInfo.pitch * 180) / 3.14} showBox={false} /></div>
                            <div><HeadingIndicator size={130} heading={droneInfo.head} showBox={false} /></div>
                            </div> : null} }
                    </Grid>
                </Grid> */}
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    droneInfoArray.length>=0 ? droneInfoArray.map(droneInfoData=> <RotatedMarker icon={droneIcon} position={[droneInfoData.data.lat, droneInfoData.data.lng]} rotationAngle={droneInfoData.data.head} rotationOrigin={'center'} >
                        <Tooltip><div>{droneInfoData.model}</div><div>{droneInfoData.uin}</div><div>{droneInfoData.ownerName}</div></Tooltip>
                        </RotatedMarker>) : null
                }
                   
                     
         <RestrictedRegion lat={27.703509391032927} long={85.35697560756164}/> 
        <RestrictedRegion lat={28.250959093759214} long= {83.99745956671849}/>
        <RestrictedRegion lat={27.30890069282222} long={85.01653103210292}/>
        <RestrictedRegion lat={28.268220822619103} long={81.71108127899701}/>
        <RestrictedRegion lat={29.070639765428044} long={80.20860411849434}/>
        <RestrictedRegion lat={27.783839620598677} long={86.72804849319726}/>
        <RestrictedRegion lat={27.471305698819304} long={87.79938003372959}/>
        <RestrictedRegion lat={26.540087057711514} long={87.34210437618529}/>
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


export default DroneControlAll;