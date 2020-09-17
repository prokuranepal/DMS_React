import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
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
    info: {
        fontSize: '10px',
        paddingRight: '20px'
    },
    head: {
        fontSize: '17px',
        margin: '5px auto'
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
    button: {

        marginTop: '10px'
    },
    buttons: {
        width: '100%',
        display: 'flex',
        
        margin: '10px 0px',
        justifyContent: 'space-evenly',
        color: 'white',
        alignItems: 'center',
    }
}));
const MissionInfo = props => {
    const classes = useStyles();
    return (<div className={classes.data}>
        {/* <p>VTOL        60%</p> */}

        <Grid container className={classes.dataItem}>
            <div className={classes.head}>Mission</div>
            <div className={classes.mission}>
                <div><p className={classes.header}>{props.mission.name}</p></div>
                <div style={{ marginTop: '10px' }}>
                    <div><span className={classes.info}>Waypoints:15</span><span className={classes.info}>ETA:35mins</span></div>
                    <div><span className={classes.info}>Distance:600m</span></div>
                </div>
                
            </div>
            <div className={classes.buttons}>
                    <div><Button onClick={props.uploadMission} size="small" variant="contained" color="primary">Upload</Button></div>
                    {/* <div> */}
                        {/* <Button onClick={props.onStartMission} size="small" variant="contained" color="primary">Start</Button></div> */}
                </div>  
        </Grid>
    </div>
    )
}
export default MissionInfo;