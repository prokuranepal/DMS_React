import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',

        margin: '15px auto'
    },
    button: {
        margin: 'auto',
        backgroundColor: '#EA6A47',
        padding: '0.8rem 3.5rem'
    },
    data: {
        margin: 'auto',
        marginLeft: '20px'
    },
    paper: {
        width: '100%',
        backgroundColor: '#5C9BDA',
        color: 'white',
        margin: `${theme.spacing(0.2)}px auto`,
        padding: theme.spacing(2),
    },
}));
const MissionList = props => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>

            <Paper className={classes.paper} elevation={5}>
                <Grid container wrap="nowrap">
                    <Grid item xs={12} sm={8} md={10}>
                        <Typography><Typography variant="h6" display="inline">   Mission ID: </Typography> {props.id}</Typography>
                        <Typography><Typography variant="h6" display="inline">Source:  </Typography>{props.source}</Typography>
                        <Typography> <Typography variant="h6" display="inline">Destination:  </Typography>{props.destination}</Typography>
 
                    </Grid>
                    <Grid container item xs={0} sm={4} md={2}>
                    <Link className={classes.button} to='/admin/missionplanner/missionview' style={{textDecoration:'none', color: 'white'}}>
                        <Button variant="contained" color='secondary' >
                            View
                </Button>
                </Link>
                    </Grid>
                </Grid>
            </Paper>
            {/* </Paper> */}
        </Grid>)
}

export default MissionList;