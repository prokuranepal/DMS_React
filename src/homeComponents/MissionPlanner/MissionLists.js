import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {Typography } from '@material-ui/core';
import MissionList from './MissionList/MissionList';
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

export const missions = [
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

/**
* A List of missions
*
* @param - No parameters
* @returns {MissionList} - returns a material table of missions
*/
const MissionLists = props => {
    const classes = useStyles();
    return(
    <Grid container className={classes.root}>
        <Grid container className={classes.subRoot}>
            <div className={classes.header}>
            <Typography variant="h4" className={classes.text}>MISSION LISTS</Typography>
            </div>
                {missions.map(mission => {
                    return <MissionList key={mission.id} id={mission.id} source={mission.source} destination={mission.destination} data-test="mission-component"/>
                })}
        </Grid>
    </Grid>)
}

export default MissionLists;