import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {Typography } from '@material-ui/core';
import MissionList from './MissionList/MissionList';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
<<<<<<< HEAD
        backgroundColor:'#A5D8DD',
        // height: '93vh'
    },
    subRoot: {
        width: '80%',
        margin: '20px auto',
        backgroundColor: '#A5D8DD',
=======
        backgroundColor:'#E7E7E7',
        borderLeft: '2px solid #E7E7E7',
        height: '93vh',
        overflowY:'scroll',
        '@global': {
            
            '*::-webkit-scrollbar-track': {
              ' -webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.3)',
              backgroundColor: 'black'
            }
            
          }
        
       
        // height: '93vh'
    },
    subRoot: {
        width: '100%',
        margin: '0px auto',
        backgroundColor: 'white',
>>>>>>> upstream/development
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
            <Typography variant="h4" className={classes.text}>MISSION LISTS</Typography>
            </div>
                {missions.map(mission => {
                    return <MissionList key={mission.id} id={mission.id} source={mission.source} destination={mission.destination}/>
                })}
        </Grid>
    </Grid>)
}

export default MissionLists;