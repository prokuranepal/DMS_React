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
const MissionListItem = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <Radio size='small' color='white' value={props.mission._id} />
            <div className={classes.body}>
                <p className={classes.header}>{props.mission.name}</p>
                <div><span className={classes.info}>Waypoints:{props.mission.wp}</span><span className={classes.info}>ETA:{props.mission.estimated_time}mins</span><span className={classes.info}>Distance:{props.mission.distance}m</span></div>
            </div>

        </div>
    )
};

export default MissionListItem;