import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SimpleAlert from '../UI/Alert/Alert';
import User from './User';

const useStyles = makeStyles((theme) => ({
    users: {

        minHeight: '93.5vh',
        padding: '1rem 6rem',
        width: '80%',
        margin: "auto"
    }
}));
const ListUsers = props => {
    const classes = useStyles();
    return(
    <Grid container className={classes.users}>
        <SimpleAlert />
        <Grid item xs={12}>
            <User title='LEVEL 1' users={props.users1} data-test="user1Comp"/>
        </Grid>

        <Grid item xs={12}>
            <User title='LEVEL 2' users={props.users2} data-test="user2Comp"/>
        </Grid>
    </Grid>)
}

export default ListUsers;