import React from 'react';
import DroneListItem from './DroneListItem/DroneListItem';
import CustomScrollbars from '../../util/CustomScrollbars';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Spinner from '../UI/Spinner/Spinner';


const useStyles = makeStyles((theme) => ({
    header: {
        fontSize: '20px',
        color: 'white',
        margin: 'auto',
        padding: '10px'
    },
    buttonLayout: {
        display: 'flex',
        flexDirection: 'row',
        margin: '20px 20px 15px',
        padding: '0px 30px'
    },
    button: {
        alignSelf: 'flex-end',
        marginLeft: 'auto'
    }

}));

/**
* A List of checks to be done before a drone is ready to fly
*
* @param {Function} props.abort - onclick function to abort the checks.
* @param {Function} props.select - function to select a drone
* @param {List} props.drones - a list of drones
* @returns {DroneList} - returns DroneListItem and buttons
*/


const DroneList = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(null);
    
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    // console.log(props.drones)
    return (
        // <div className="module-list mail-list">
        <div data-test="container-component">
            {props.drones ?
            <FormControl component="fieldset">
                <p className={classes.header}>Select Drone</p>
                <CustomScrollbars className="module-list-scroll scrollbar"
                    style={{ height: 200 >= 800 ? 'calc(100vh - 600px)' : 'calc(100vh - 400px)', minWidth: '300px' }}>
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}  data-test="radio-component">
                        {props.drones.map((drone, index) =>
                            // <FormControlLabel control={}>
                            <DroneListItem key={index} drone={drone} data-test="dronelist-component"/>
                        )}
                    </RadioGroup>
                </CustomScrollbars>
                <div className={classes.buttonLayout}>
                    <Button variant="outlined" color='white' onClick={props.abort} data-test="button1-component">Abort</Button>
                    <Button variant="outlined" color="white" className={classes.button} onClick={() => props.select(value)} data-test="button2-component">Select</Button>
                </div>
            </FormControl>: <Spinner/>}
        </div>

    )
};

export default DroneList;