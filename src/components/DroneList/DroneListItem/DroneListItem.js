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
const DroneListItem = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <Radio size='small' color='white' value={props.drone.value} />
            <div className={classes.body}>
                <p className={classes.header}>{props.drone.name}</p>
                <div><span className={classes.info}>Code:{props.drone.code}</span><span className={classes.info}>Type:{props.drone.type}</span></div>
            </div>

        </div>
    )
};

export default DroneListItem;