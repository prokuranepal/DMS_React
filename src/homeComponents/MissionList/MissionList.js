import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionListItem from './MissionListItem/MissionListItem';
import CustomScrollbars from '../../util/CustomScrollbars';

import FormControl from '@material-ui/core/FormControl';

import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Spinner from '../UI/Spinner/Spinner';
import * as actions from '../../store/actions/mission';

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
        console.log(event.target.value);
        setValue(event.target.value);
    };
    const missions = useSelector(({ mission }) => mission.missions);
    // console.log(missions);
    useEffect(() => {
        dispatch(actions.fetchMissionList());
    }, [dispatch]);
    return (
        // <div className="module-list mail-list">
        <div >
            {missions !== null ?
                <FormControl component="fieldset">
                    <p className={classes.header}>Select Mission</p>
                    <CustomScrollbars className="module-list-scroll scrollbar"
                        style={{ height: 200 >= 800 ? 'calc(100vh - 600px)' : 'calc(100vh - 400px)', minWidth: '300px' }}>
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            {missions.map((mission, index) =>
                                // <FormControlLabel control={}>
                                <MissionListItem key={index} mission={mission} />
                            )}
                        </RadioGroup>
                    </CustomScrollbars>
                    <div className={classes.buttonLayout}>
                        <Button variant="outlined" color='white' onClick={props.abort}>Abort</Button>
                        <Button variant="outlined" color="white" className={classes.button} onClick={() => props.select(value)}>Select</Button>
                    </div>
                </FormControl> : <Spinner />}
        </div>

    )
};

export default MissionList;