import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import DroneList from '../../../../homeComponents/DroneList/DroneList';
import DroneInfo from '../../../DroneData/DroneInfo/DroneInfo';
import CustomScrollbars from '../../../../util/CustomScrollbars';
import CustomModal from '../../../../hoc/Modal/Modal';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: '10px'

    },
    body: {
        // backgroundColor: '#495057',
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
        flex: '1 0',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10px',
        width: '100%',
        height: '75vh'
    },
    data: {
        borderStyle: 'solid',
        borderRadius: '4px',
        borderColor: 'sky-blue',
        borderWidth: '1px',
        width: '90%',
        margin: 'auto',
        padding: '5px'
    },
    dataItem: {
        padding: '5px',
        fontSize: '10px'
    },
    buttonLayout: {
        width: '100%'
        // padding: '0px 30px'
    },
    rowButtonLayout: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: '10px 10px'
    },
    button: {
        marginTop: '10px',
    },


}));

/**
 * This shows the real time data of a particular drone.
 * @param {Function} props.handleOpenMission- To open the mission dialog box
 * @param {Function} props.handleOpenCheck- To open the checklist dialog box
 * @param {Function} props.handleOpenDrone- To open the available drone list dialog box
 * @param {Function} props.onDownloadMission- To download the mission from the drone
 * @param {Boolean} props.checklistPass- value to denote if all the checks are passed
 * @param {Function} props.showMissionDetail- To show the mission detail after it has been downloaded
 * @param {Function} props.uploadMission- To upload the mission
 * @param {Object} props.mission- mission details like number of waypoints, flight distance and mission name
 * @param {Boolean} props.openMissionList- value to make the mission dialog box open
 * @param {Boolean} props.openCheckList- value to make the checklist dialog box open
 * @param {Boolean} props.openDroneList- value to make the active drone list dialog box open
 * @param {Function} props.handleCloseMission- To close the mission list dialog box
 * @param {Function} props.handleCloseCheck - To close the checklist dialog box
 * @param {Function} props.handleCloseDrone - To close the drone list dialog box
 * @param {Function} props.selectMission - set the selected mission
 * @param {Function} props.selectDrone - set the selected drone
 * @param {List} props.activeDrones - list of active drones
 * @returns {DroneData} - Returns a list of drone info with several buttons
 
 */

const DroneData = props => {
    const classes = useStyles();
    const [statusColor, setStatusColor] = React.useState('bg-red');

    useEffect(() => {
        // console.log("here")
        if(props.droneConnected) {
            setStatusColor('bg-green')
        } else {
            setStatusColor('bg-red');
        }
    },[props.droneConnected])
    return (
        // <div className="app-wrapper">
        <Grid container className={classes.root}>
            <Grid item container className={classes.top}>
                <Grid item xs={12} container justify="center">
                    <Fab className={`jr-fab-btn text-black jr-btn-fab-xs ${statusColor}`}>
                        
                    </Fab>
                </Grid>
            </Grid>

            <Grid container className={classes.body}>
            
                <Grid item container className={classes.text}>
                    <Grid item xs={12} container justify="center">
                        <p>ACTIVEE</p>
                    </Grid>
                    

                </Grid>
                <Grid container xs={12} className={classes.textColor}>
                
                    <div className={classes.drone}>
                    
                        <Button size="small" variant="contained" color="primary" onClick={props.handleOpenDrone}>Choose Drone</Button>
                        <CustomScrollbars className=" scrollbar">
                        {props.droneFirstConnected ? <DroneInfo data={props.droneInfo} /> : null}
                        {props.droneFirstConnected ?
                            <div className={classes.buttonLayout}>
                            {/* <div> */}
                                <div className={classes.rowButtonLayout}>
                                    <Button onClick={props.onDownloadMission} size="small" variant="contained" color="primary">Download Mission</Button>
                                </div>
                                <div className={classes.rowButtonLayout}>
                                    <Button onClick={() => props.onLand('land')} size="small" variant="contained" color="primary">Land</Button>
                                    <Button onClick={() => props.onRTL('rtl')} size="small" variant="contained" color="primary">RTL</Button>
                                    <Button disabled={props.checklistPass} onClick={() => props.onStartMission('start')} size="small" variant="contained" color="primary">Fly</Button>
                                </div>
                            </div>
                            : null}
                        {/* {props.mission !== null && props.showMissionDetail ? <MissionInfo uploadMission={props.uploadMission}  mission={props.mission} /> : null} */}
                        </CustomScrollbars>
                    </div>
                    
                    {/* {props.droneConnected ?
                        <div className={classes.drone}>
                            <Button onClick={props.onDownloadMission} size="small" variant="contained" color="primary">Download</Button>
                        </div> : null} */}

                </Grid>

            
            <CustomModal
                open={props.openDroneList}
                close={props.handleCloseDrone}
                component={<DroneList abort={props.handleCloseDrone} userType={props.userType} select={props.selectDrone} drones={props.activeDrones} />} />
                
        </Grid>
        </Grid>

    )
}

export default DroneData;