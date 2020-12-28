import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { signIn, resetPassword, signUp } from '../../../store/actions/auth';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { withStyles } from "@material-ui/core/styles";
// import Drone from '../../../assets/quad.jpg';
import Copyright from '../../../homeComponents/UI/Copyright/Copyright';
import IntlMessages from '../../../util/IntlMessages';
import { makeStyles } from '@material-ui/core/styles';
// import CircularProgress from "@material-ui/core/CircularProgress";
// import { NotificationContainer, NotificationManager } from "react-notifications";
import * as actions from '../../../store/actions/auth';
import CustomScrollbars from '../../../util/CustomScrollbars';

/**
 * This shows the signup page.
 * @param - No param
 * @returns {SignUp} - Returns a list of input fields for signing up
 * 
 */


const SignUp = (props) => {

    const useStyles = makeStyles((theme) => ({
        paper: {
            margin: theme.spacing(8, 4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 0),
        },
    }));

    const [first_name, setFirstName] = useState('Sushil');
    const [last_name, setLastName] = useState('Khadka');
    const [phone_number, setPhone] = useState('9840016544');
    const [email, setEmail] = useState('punksusil.khadka@gmail.com');
    const [password, setPassword] = useState('sushil');
    const [health_facilities, setHealthFaclities] = useState('5fa2839a9827ab1a65bf2cd8');
    const dispatch = useDispatch();

    const errorMessage = useSelector(({ auth }) => auth.signUpError);
    const successMessage = useSelector(({ auth }) => auth.signUpSuccess);
    const classes = useStyles();




    const signUp = () => {

        dispatch(actions.signUp({ first_name, last_name, phone_number, email, password, health_facilities }));
    }
    return (
        <CustomScrollbars className="module-list-scroll scrollbar">
            <div className={classes.paper}>
                {/* <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar> */}
                <Typography component="h1" variant="h5">
                    Sign Up
                        </Typography>
                <Typography component="h5">
                    {errorMessage}
                </Typography>
                <Typography component="h5">
                    {successMessage}
                </Typography>
                <form className={classes.form} noValidate={false}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="firstName"
                        label={<IntlMessages id="signUp.firstName" />}
                        id="firstName"
                        defaultValue={first_name}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="lastName"
                        label={<IntlMessages id="signUp.lastName" />}
                        id="lastName"
                        defaultValue={last_name}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="lastName"
                        label={<IntlMessages id="appModule.phone" />}
                        id="lastName"
                        defaultValue={phone_number}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label={<IntlMessages id="appModule.email" />}
                        name="email"
                        defaultValue={email}
                        onChange={(event) => setEmail(event.target.value)}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label={<IntlMessages id="appModule.password" />}
                        type="password"
                        id="password"
                        defaultValue={password}
                        autoComplete="current-password"
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <Button
                        onClick={(event) => {
                            event.preventDefault();
                            signUp();
                        }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                            </Button>
                    <Button
                        onClick={(event) => {
                            event.preventDefault();
                            props.select(1);
                        }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Switch to Sign In
                            </Button>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </form>
            </div>
        </CustomScrollbars>
    );
}


export default SignUp;