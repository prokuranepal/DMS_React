import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {Typography } from '@material-ui/core';
import MissionList from './MissionList/MissionList';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor:'#E7E7E7',
        // height: '93vh'
    },
    subRoot: {
        width: '80%',
        margin: '20px auto',
        backgroundColor: 'white',
        // minHeight: '50vh'
    },
    header: {
        minHeight: '50px',
        margin: 'auto'
    },
    text: {
        padding: theme.spacing(2),
        fontSize: 25
    }
}));

const missions = [
    {
        id: 'abc',
        source: 'Dharan',
        destination: 'Biratnagar'
    },
    {
        id: 'xyz',
        source: 'Dharan',
        destination: 'Biratnagar'
    },
    {
        id: 'efg',
        source: 'Dharan',
        destination: 'Biratnagar'
    },
    {
        id: 'mno',
        source: 'Dharan',
        destination: 'Biratnagar'
    },
    {
        id: 'mnop',
        source: 'Dharan',
        destination: 'Biratnagar'
    },
    {
        id: 'mnopq',
        source: 'Dharan',
        destination: 'Biratnagar'
    }
]
const MissionLists = props => {
    const classes = useStyles();
    return(
    <Grid container className={classes.root}>
        <Grid container className={classes.subRoot}>
            <div className={classes.header}>
            <Typography className={classes.text}>Mission Lists</Typography>
            </div>
                {missions.map(mission => {
                    return <MissionList key={mission.id} id={mission.id} source={mission.source} destination={mission.destination}/>
                })}
        </Grid>
    </Grid>)
}

export default MissionLists;