import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import MissionList from '../../homeComponents/MissionList/MissionList';
import CheckList from '../../homeComponents/CheckList/CheckList';
import DroneList from '../../homeComponents/DroneList/DroneList';
import MissionInfo from './MissionInfo/MissionInfo';
import DroneInfo from './DroneInfo/DroneInfo';
import {socket} from '../../socket';
import * as actions from '../../store/actions/droneControl';
import CustomModal from '../../hoc/Modal/Modal'
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: '10px'

    },
    body: {
        backgroundColor: '#495057',
        // minHeight: '50vh',
        zIndex: 40,
        borderRadius: 10,
        marginTop: '-10px',

    },
    top: {
        zIndex: 50
    },
    text: {
        color: 'white',
        fontSize: '8px',
        marginTop: '15px',
        display: 'flex-wrap'
    },
    textColor: {
        color: 'white',
    },
    drone: {
        flex: '1 1',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10px'
    },
    data: {
        borderStyle: 'solid',
        borderRadius: '4px',
        borderColor: 'sky-blue',
        borderWidth: '1px',
        width: '90%',
        margin: '5px 0px',
        padding: '5px'
    },
    dataItem: {
        padding: '5px',
        fontSize: '10px'
    },
    buttonLayout: {
        display: 'flex',
        flexDirection: 'row',
        margin: '20px 20px 15px',
        padding: '0px 30px'
    },
    button: {
        
        marginTop: '10px',
    },
    
    
}));


const DroneData = props => {
    const classes = useStyles();
    const [openMissionList, setOpenMissionList] = React.useState(false);
    const [openCheckList, setOpenCheckList] = React.useState(false);
    const [openDroneList, setOpenDroneList] = React.useState(false);
    const [drone, setDrone] = React.useState(null);
    const [mission, setMission] = React.useState(null);
    const [droneInfo, setDroneInfo] = React.useState(null);
    const activeDrones = useSelector(({ droneControl }) => droneControl.activeDrones);
    // console.log(activeDrones);
    const dispatch = useDispatch();
    const setData = (data) => {
        // console.log(data);
        setDroneInfo(data);
    }
    // useEffect(() => {
    //     socket.emit(drone);
    //     socket.on("data",setData);
    //     return function cleanup() {      
    //         socket.off("data");
    //     };
    // },[drone]);

    const handleOpenMission = () => {
        
        setOpenMissionList(true);
    };

    const handleCloseMission = () => {
        setOpenMissionList(false);
    };

    const handleOpenCheck = () => {
        setOpenCheckList(true);
    };

    const handleCloseCheck = () => {
        setOpenCheckList(false);
    };

    const handleOpenDrone = () => {
        dispatch(actions.fetchActiveDrones());
        setOpenDroneList(true);
    };

    const handleCloseDrone = () => {
        setOpenDroneList(false);
    };

    const selectDrone = (drone) => {
        setDrone(drone);
        setOpenDroneList(false);
    }

    const selectMission = (mission) => {
        setMission(mission);
        setOpenMissionList(false);
    }
    return (
        // <div className="app-wrapper">
        <Grid container className={classes.root}>
            <Grid item container className={classes.top}>
                <Grid item xs={4} container justify="center">
                    <Fab className="jr-fab-btn bg-white text-black jr-btn-fab-xs">
                        <i className="zmdi zmdi-search zmdi-hc-fw" />
                    </Fab>
                </Grid>
                <Grid item xs={4} container justify="center" onClick={handleOpenMission}>
                    <Fab className="jr-fab-btn bg-white text-black jr-btn-fab-xs">
                        <i className="zmdi zmdi-shopping-basket zmdi-hc-fw" />
                    </Fab>
                </Grid>
                <Grid item xs={4} container justify="center" onClick={handleOpenCheck}>
                    <Fab className="jr-fab-btn bg-white text-dark-grey jr-btn-fab-xs">
                        <i className="zmdi zmdi-spinner zmdi-hc-fw" />
                    </Fab>
                </Grid>
                
            </Grid>

            <Grid container className={classes.body}>
                <Grid item container className={classes.text}>
                    <Grid item xs={4} container justify="center">
                        <p>FLY</p>
                    </Grid>
                    <Grid item xs={4} container justify="center">
                        <p>MISSION</p>
                    </Grid>
                    <Grid item xs={4} container justify="center">
                        <p>CHECKLIST</p>
                    </Grid>
                    
                </Grid>
                <Grid container xs={12} className={classes.textColor}>

                    <div className={classes.drone}>
                        <Button  size="small" variant="contained" color="primary" onClick={handleOpenDrone}>Choose Drone</Button>
                        {drone !== null?<DroneInfo data={droneInfo}/>: null}
                        {mission !== null?<MissionInfo/>:null}
                        
                    </div>

                </Grid>

            </Grid>
            
            <CustomModal
                open={openMissionList}
                close={handleCloseMission}
                component={<MissionList abort={handleCloseMission}  select={selectMission}/>} />
            <CustomModal
                open={openCheckList}
                close={handleCloseCheck}
                component={<CheckList abort={handleCloseCheck} />} />
            <CustomModal 
                open={openDroneList}
                close={handleCloseDrone}
                component={<DroneList abort={handleCloseDrone} select={selectDrone} drones={activeDrones}/>}/>
        </Grid>
        // </div>
    )
}

export default DroneData;