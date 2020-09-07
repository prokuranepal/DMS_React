import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SimpleAlert from '../UI/Alert/Alert';
import User from './User';
import {useSelector, useDispatch} from 'react-redux'
import * as actions from '../../store/actions/users'
const useStyles = makeStyles((theme) => ({
    users: {

        minHeight: '93.5vh',
        padding: '1rem 6rem',
        width: '80%',
        margin: "auto"
    }
}));
const ListUsers = props => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.getUsers());
    },[dispatch])
    const userData = useSelector(({users}) => users.users)
    const classes = useStyles();
    console.log(userData);
    return(
    <Grid container className={classes.users}>
        <SimpleAlert />
        <Grid item xs={12}>
            <User users={userData} />
        </Grid>
    </Grid>)
}

export default ListUsers;