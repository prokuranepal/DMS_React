import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import MissionList from '../../homeComponents/MissionList/MissionList';
import CheckList from '../../homeComponents/CheckList/CheckList';
import DroneList from '../../homeComponents/DroneList/DroneList';
import MissionInfo from './MissionInfo/MissionInfo';
import DroneInfo from './DroneInfo/DroneInfo';

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

// let socket = null;
const DroneData = props => {
    const classes = useStyles();
    return (
        // <div className="app-wrapper">
        <Grid container className={classes.root}>
            <Grid item container className={classes.top}>
                <Grid item xs={4} container justify="center">
                    <Fab className="jr-fab-btn bg-white text-black jr-btn-fab-xs">
                        <i className="zmdi zmdi-search zmdi-hc-fw" />
                    </Fab>
                </Grid>
                <Grid item xs={4} container justify="center" onClick={props.handleOpenMission}>
                    <Fab className="jr-fab-btn bg-white text-black jr-btn-fab-xs">
                        <i className="zmdi zmdi-shopping-basket zmdi-hc-fw" />
                    </Fab>
                </Grid>
                <Grid item xs={4} container justify="center" onClick={props.handleOpenCheck}>
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
                        <Button size="small" variant="contained" color="primary" onClick={props.handleOpenDrone}>Choose Drone</Button>
                        {props.drone !== null ? <DroneInfo data={props.droneInfo} /> : null}
                        {props.mission !== null ? <MissionInfo  uploadMission={props.uploadMission} onStartMission={props.onStartMission} mission={props.mission} /> : null}

                    </div>
                    {props.drone !== null ?<div className={classes.drone}>
                        <Button onClick={props.onDownloadMission} size="small" variant="contained" color="primary">Download</Button>
                    </div>:null}

                </Grid>

            </Grid>

            <CustomModal
                open={props.openMissionList}
                close={props.handleCloseMission}
                component={<MissionList abort={props.handleCloseMission} select={props.selectMission} />} />
            <CustomModal
                open={props.openCheckList}
                close={props.handleCloseCheck}
                component={<CheckList abort={props.handleCloseCheck} />} />
            <CustomModal
                open={props.openDroneList}
                close={props.handleCloseDrone}
                component={<DroneList abort={props.handleCloseDrone} select={props.selectDrone} drones={props.activeDrones} />} />
        </Grid>
        // </div>
    )
}

export default DroneData;