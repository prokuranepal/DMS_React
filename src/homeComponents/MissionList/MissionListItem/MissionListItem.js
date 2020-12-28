import React from 'react';
// import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
// import labels from 'app/routes/mail/data/labels';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        // flexWrap: 'wrap',
        fontSize: '15px',
        margin: '2px',
        backgroundColor: '#495057',
        borderRadius: '10px',
        padding: '10px 5px'
    },
    body: {
        flex: '1 1',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap'
    },
    header: {
        fontSize: '15px',
        marginBottom: '0px',
    },
    info: {
        fontSize: '10px',
        paddingRight: '20px'
    }
}));

/**
* A single drone in the drone list containing a label with a radio
*
* @param {AlphaNumeric} props.mission._id - a unique ID of a mission
* @param {string} props.mission.name - name of the mission
* @param {Integer} props.mission.wb - number of waypoints in the mission
* @param {Integer} props.mission.estimated_time - estimated time of completion of mission in a given speed
* @param {string} props.mission.distance - estimated time of completion of mission in a given speed
* @returns {MissionListItem} - It returns a radio with a label
*/

const MissionListItem = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <Radio size='small' color='primary' value={props.mission.value} data-test="missionValue"/>
            <div className={classes.body}>
                <p className={classes.header} data-test="missionTitle">{props.mission.title}</p>
                <div><span className={classes.info} data-test="missionWaypoints">Waypoints:{props.mission.waypoints}</span><span className={classes.info} data-test="missionEta">ETA:{props.mission.ETA}mins</span><span className={classes.info} data-test="missionDistance">Distance:{props.mission.dist}m</span></div>
            </div>

        </div>
    )
};

export default MissionListItem;