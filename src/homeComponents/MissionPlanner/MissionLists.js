import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {Typography } from '@material-ui/core';
import MissionList from './MissionList/MissionList';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../store/actions/mission';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor:'#A5D8DD',
        // height: '93vh'
    },
    subRoot: {
        width: '80%',
        margin: '20px auto',
        backgroundColor: '#A5D8DD',
        // minHeight: '50vh'
    },
    header: {
        minHeight: '50px',
        margin: 'auto'
    },
    text: {
        padding: theme.spacing(3),
        
    }
}));

// const missions = [
//     {
//         id: 'abc',
//         source: 'Dharan',
//         destination: 'Biratnagar'
//     },
//     {
//         id: 'xyz',
//         source: 'Dharan',
//         destination: 'Biratnagar'
//     },
//     {
//         id: 'efg',
//         source: 'Dharan',
//         destination: 'Biratnagar'
//     },
//     {
//         id: 'mno',
//         source: 'Dharan',
//         destination: 'Biratnagar'
//     },
//     {
//         id: 'mnop',
//         source: 'Dharan',
//         destination: 'Biratnagar'
//     },
//     {
//         id: 'mnopq',
//         source: 'Dharan',
//         destination: 'Biratnagar'
//     }
// ]
const MissionLists = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {missions} = useSelector(({ mission }) => mission);
    console.log(missions);
    useEffect(() => {
        dispatch(actions.fetchMissionList());
    },[dispatch])

    return(
    <Grid container className={classes.root}>
        <Grid container className={classes.subRoot}>
            <div className={classes.header}>
            <Typography variant="h4" className={classes.text}>MISSION LISTS</Typography>
            </div>
                {missions.map(mission => {
                    return <MissionList key={mission._id} id={mission._id} source={mission.destination.name} destination={mission.destination.location}/>
                })}
        </Grid>
    </Grid>)
}

export default MissionLists;