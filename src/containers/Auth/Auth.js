import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';

import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';

import Drone from '../../assets/quad.jpg';

import { makeStyles } from '@material-ui/core/styles';

import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const Auth = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            height: '100vh',
        },
        image: {
            backgroundImage: `url(${Drone})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor:
                theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
    }));


    const classes = useStyles();
    const token = useSelector(({ auth }) => auth.token);
    const [auth, setAuth] = useState(1);
    useEffect(() => {
        if (token !== null && token !== undefined && token !== "undefined") {
            props.history.push('/');
        }
    }, [token]);
    
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                {auth === 1?<SignIn select={() => setAuth(0)}/>: <SignUp select={() => setAuth(1)}/>}
            </Grid>
        </Grid>
    );
}


export default Auth;