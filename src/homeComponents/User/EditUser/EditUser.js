import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
// import  { createUser1, createUser2} from '../../store/actions/users'
import { connect } from 'react-redux';
import SimpleAlert from '../../UI/Alert/Alert';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Paper, Typography } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { setAlert } from '../../../store/actions/alert';
import {useDispatch} from 'react-redux';
import * as actions from '../../../store/actions/users'
const EditUser = ({ history, location, setAlert }) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            width: '100%'
        },
        users: {
            backgroundColor: '#E7E7E7',
            minHeight: '93.5vh',
            padding: '4rem 6rem',
            width: '84%',
            display: 'flex',
            justifyContent: 'space-between'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem 6rem'
        },
        layout: {
            width: '100%',
            height: '600px'

        },
        header: {
            background: 'red',
            padding: '1rem 6rem',
            backgroundColor: '#4597D6',
            color: 'white'

        },
        submit: {
            marginTop: '3rem',
            textDecoration: 'none',
            backgroundColor: '#EA6A47',
            color: 'white',
            padding: '0.8rem 0',
            fontSize: '1rem',
            width: '13%',
            marginRight: '20px'
        },
        back: {
            marginTop: '3rem',
            textDecoration: 'none',
            padding: '0.8rem 0',
            fontSize: '1rem',
            width: '13%',
            backgroundColor: '#7E909A'
        }
    }));

    const [formData, setFormData] = useState({
        // email: 'swainstha@gmail.com',
        firstName: 'Swain',
        lastName: 'Shrestha',
        // phoneNumber: '9842558818',
        healthFacilities: '5f2bb9d7e0d78272f38eb279',
        // password: 'abc',
        _id: ''
    })



    useEffect(() => {
        setFormData({
            firstName: location.state.user.firstName,
            lastName: location.state.user.lastName,
            // email: location.state.user.email,
            // phoneNumber: location.state.user.phoneNumber,
            healthFacilities: location.state.user.healthFacilities,
            // password: location.state.user.password,
            _id: location.state.user._id
        })
    }, [])

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (_.isEqual(formData, location.state.user)) {
            setAlert('There is no change to update', 'warning')
        } else {

            // formData.level==='Level 1'
            // ? createUser1(formData, history, true) 
            // : createUser2(formData, history, true);
        }


    };

    const {firstName, lastName, healthFacilities } = formData;

    const dispatch = useDispatch()
    const updateUser = () => {
        dispatch(actions.updateUser(formData, formData._id))
    }
    const classes = useStyles();
    return (
        <div className={classes.root} data-test="container-component">

            <Grid container className={classes.users}>
                <SimpleAlert />

                <Paper className={classes.layout}>
                    <Grid item xs={12}>


                        <Typography variant='h4' className={classes.header}>EDIT USER</Typography>

                        <form className={classes.form} onSubmit={onSubmit}>

                            <TextField margin='normal' onChange={onChange} name='firstName' value={firstName} id="standard-basic" label="First Name" required />
                            <TextField margin='normal' onChange={onChange} name='lastName' value={lastName} id="standard-basic" label="Last Name" required />
                            <TextField margin='normal' onChange={onChange} name='healthFacilities' value={healthFacilities} id="standard-basic" label="Health Post" />

                            <div>

                                <Button className={classes.submit} type='submit' variant="contained" color='primary' onClick={updateUser}>
                                    SUBMIT
                                            </Button>
                                <Link to='app/users/list-users' style={{ textDecoration: 'none', color: 'white' }}>
                                    <Button className={classes.back} variant="contained" color='secondary' startIcon={<KeyboardBackspaceIcon />} >
                                        Go Back
                                                </Button>
                                </Link>
                            </div>

                        </form>
                    </Grid>
                </Paper>

            </Grid>


        </div>

    )
}

EditUser.propTypes = {

}




export default connect(null, { setAlert })(withRouter(EditUser))
