import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MissionListItem from './MissionListItem/MissionListItem';
import CustomScrollbars from '../../util/CustomScrollbars';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Spinner from '../UI/Spinner/Spinner';
import * as actions from '../../store/actions/droneControl';

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
const MissionList = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('1');
    
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const missions = useSelector(({ droneControl }) => droneControl.missions);

    useEffect(() => {
        dispatch(actions.fetchMissionList());
    },[]);
    return (
        // <div className="module-list mail-list">
       <div>
           {missions !== null?
        <FormControl component="fieldset">
            <p className={classes.header}>Select Mission</p>
        <CustomScrollbars className="module-list-scroll scrollbar"
            style={{ height: 200 >= 800 ? 'calc(100vh - 600px)' : 'calc(100vh - 400px)', minWidth: '300px' }}>
            <RadioGroup data-test="radioGroup" aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                {missions.map((mission, index) =>
                    // <FormControlLabel control={}>
                    <MissionListItem key={index} mission={mission} data-test="missionList" />
                )}
            </RadioGroup>
        </CustomScrollbars>
        <div className={classes.buttonLayout}>
                        <Button variant="outlined" color='primary' onClick={props.abort} data-test="abortButton">Abort</Button>
                        <Button variant="outlined" color="primary" className={classes.button} onClick={() => props.select(value)} data-test="selectButton">Select</Button>
                        </div>
        </FormControl>:<Spinner/>}
        </div>
        
    )
};

export default MissionList;