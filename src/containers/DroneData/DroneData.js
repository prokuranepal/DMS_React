import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import MissionList from '../../components/MissionList/MissionList';
import CheckList from '../../components/CheckList/CheckList';
import Radio from '@material-ui/core/Radio';
import MissionListItem from '../../components/MissionList/MissionListItem/MissionListItem';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: '10px'

    },
    body: {
        backgroundColor: '#495057',
        // minHeight: '50vh',
        zIndex: 1,
        borderRadius: 10,
        marginTop: '-10px',

    },
    top: {
        zIndex: 10
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
        alignItems: 'center'
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
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: '#343a40',
        borderRadius: '10px',
        padding: theme.spacing(1, 2, 1, 1),
        color: 'white',
        width: '320px'
    },
    buttonLayout: {
        display: 'flex',
        flexDirection: 'row',
        margin: '20px 20px 15px',
        padding: '0px 30px'
    },
    button: {
        
        marginTop: '10px'
    },
    mission: {
        
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        margin: 'auto'
    },
    header: {
        fontSize: '15px',
        marginBottom: '0px',
    },
    info: {
        fontSize: '10px',
        paddingRight: '20px'
    },
    head: {
        fontSize: '17px',
        margin: '5px auto'
    }
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
const DroneData = props => {
    const classes = useStyles();
    const [openMissionList, setOpenMissionList] = React.useState(false);
    const [openCheckList, setOpenCheckList] = React.useState(false);
    const [style, setStyle] = React.useState(getModalStyle);
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
                        {/* <p>--------  Drone  -------</p> */}
                        <Button size="small" variant="contained" color="primary">Choose Drone</Button>
                        <div className={classes.data}>
                            {/* <p>VTOL        60%</p> */}
                            <Grid container >
                                <Grid justify="flex-start" container className={classes.dataItem}>
                                    <Typography>VTOL</Typography>

                                </Grid>
                                <Grid sm={6} xs={12} className={classes.dataItem}>
                                    <span>Battery</span>
                                    <Typography>60%</Typography>
                                </Grid>
                                <Grid sm={6} xs={12} className={classes.dataItem}>
                                    <span>Altitude</span>
                                    <Typography>30m</Typography>
                                </Grid>
                                <Grid sm={6} xs={12} className={classes.dataItem}>
                                    <span>Speed</span>
                                    <Typography>10m/s</Typography>
                                </Grid>
                                <Grid sm={6} xs={12} className={classes.dataItem}>
                                    <span>Latitude</span>
                                    <Typography>27.1234</Typography>
                                </Grid>
                                <Grid sm={6} xs={12} className={classes.dataItem}>
                                    <span>Longitude</span>
                                    <Typography>85.1234</Typography>
                                </Grid>
                                <Grid sm={6} xs={12} className={classes.dataItem}>
                                    <span>GPS</span>
                                    <Typography>12</Typography>
                                </Grid>
                                <Grid sm={6} xs={12} className={classes.dataItem}>
                                    <span>Status</span>
                                    <Typography>Available</Typography>
                                </Grid>
                            </Grid>
                        </div>
                        <div className={classes.data}>
                            {/* <p>VTOL        60%</p> */}
            
                                <Grid  container className={classes.dataItem}>
                                    <div className={classes.head}><span>Mission</span></div>
                                    <div className={classes.mission}>
                                        <div><p className={classes.header}>Dharan To Dhankuta</p></div>
                                        <div style={{marginTop: '10px'}}>
                                        <div><span className={classes.info}>Waypoints:15</span><span className={classes.info}>ETA:35mins</span></div>
                                        <div><span className={classes.info}>Distance:600m</span></div>
                                        </div>
                                        <div className={classes.button}>
                                            <Button variant="contained" size='small' color="primary">Start Mission</Button>
                                            </div>
                                    </div>
                                </Grid>
                        </div>
                    </div>

                </Grid>

            </Grid>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openMissionList}
                onClose={handleCloseMission}
                closeAfterTransition
            >
                <Fade in={openMissionList}>
                    <div className={classes.paper} style={style}>
                        <MissionList abort={handleCloseMission} />

                    </div>
                </Fade>
            </Modal>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openCheckList}
                onClose={handleCloseCheck}
                closeAfterTransition
            >
                <Fade in={openCheckList}>
                    <div className={classes.paper} style={style}>
                        <CheckList abort={handleCloseCheck} />

                    </div>
                </Fade>
            </Modal>
        </Grid>
        // </div>
    )
}

export default DroneData;