import React from 'react';
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

function getDroneText(id) {
    switch (id) {
        case 0:
            return "Quadcopter";
        case 1:
            return "Hexacopter";
        case 2:
            return "Octocopter";
        case 3:
            return "Fixed Wing";
        case 4:
            return "Quadplane VTOL";
        case 5:
            return "Tilt-Rotor VTOL";
        default:
            return "None"
    }
}

/**
* A single drone in the drone list containing a label with a radio
*
* @param {AlphaNumeric} props.drone.droneId - a unique ID of a drone
* @param {string} props.drone.name - name of a drone
* @param {string} props.drone.type - type of drone such as quadcopter, vtol etc
* @returns {DroneListItem} - It returns a checkbox with a label
*/

const DroneListItem = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root} data-test="container-component">

            <Radio size='small' color='white' value={props.drone.droneId} data-test="innerradio-component" />
            <div className={classes.body}>
                <p className={classes.header} data-test="dronename-component">{props.drone.name}</p>
                <div><span className={classes.info} data-test="dronecode-component">Code: {props.drone.droneId}</span><span className={classes.info} data-test="dronetype-component">Type: {getDroneText(props.drone.type)}</span></div>
            </div>

        </div>
    )
};

export default DroneListItem;