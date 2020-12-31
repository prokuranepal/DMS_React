import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import * as users from '../../store/actions/users';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0.5),
            width: '50ch',

        },
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: theme.spacing(2),

    },
    labelItem: {
        margin: theme.spacing(1),
        color: 'black',
    },
    textFieldItem: {

    },
    componentItem: {
        display: 'flex',
        flexDirection: 'column',

    },
    rowButtonLayout: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: '30px 10px',
        width: '100%'
    },
}));

/**
 * This shows the seditable profile page.
 * @param - No Arguments
 * @returns {Profile} - Returns a list of input fields for user profile 
 
 */

const Profile = () => {

    const classes = useStyles();
    const userId = useSelector(({ auth }) => auth.userId);
    const selfUserData = useSelector(({ users }) => users.selfUserData);
    const dispatch = useDispatch();
    const [state, setState] = React.useState({
        firstName: { key: 'firstName', title: "First Name", value: "" },
        lastName: { key: 'lastName', title: "Last Name", value: "" },
        healthFacilities: { key: 'healthFacilities', title: "Hospital Name", value: "" },
        province: { key: 'province', title: "Province", value: "" },
        district: { key: 'district', title: "District", value: "" },
        town: { key: 'town', title: "Town/ City", value: "" },
        phoneNumber: { key: 'phoneNumber', title: "Phone Number", value: "" },
        email: { key: 'email', title: "Email", value: "" },
    })
    const keys = Object.keys(state);
    const form = keys.map(key => { return { title: state[key].title, value: state[key].value } })

    const handleChange = (event, index) => {
        const data = { ...state };
        data[index].value = event.target.value;
        setState(data);
        // console.log(event.target.value);
        // let element = state[index];
        // element = {
        //     ...element,
        //     value: event.target.value
        // }
        // let newState = [...state];
        // newState.splice(index, 1, element);
        // setState(newState);
    }

    useEffect(() => {
        console.log(userId);
        if (userId !== undefined || userId !== null) {
            dispatch(users.getSelfUserData(userId));
        }
    }, [dispatch, userId])

    useEffect(() => {
        console.log(selfUserData)
        const updateState = {
            ...state
        };
        for (let key in selfUserData) {
            // console.log(key, updateState[key], data[key]);
            if (updateState[key] !== undefined) {
                if (key === 'healthFacilities') {
                    updateState[key] = {
                        ...updateState[key],
                        value: selfUserData[key].name
                        // valid: this.checkValidity(data[key], updateState[key].validation),
                    };
                } else {
                    updateState[key] = {
                        ...updateState[key],
                        value: selfUserData[key]
                        // valid: this.checkValidity(data[key], updateState[key].validation),
                    };
                }
            }
        }
        setState(updateState)

    }, [selfUserData])

    const updateSelfUserData = () => {
        const data = {
            firstName: state.firstName.value,
            lastName: state.lastName.value,
            healthFacilities: state.healthFacilities.value,
            province: state.province.value,
            district: state.district.value,
            town: state.town.value,
            // phoneNumber: state.phoneNumber.value,
            // email: state.email.value
        }
        dispatch(users.updateSelfUserData(userId, data))
    }

    return (
        <div className={classes.root}>
            <div>
                <Typography variant="h5" >User Profile</Typography>
            </div>
            <form noValidate autoComplete="off">
                {form.map((form, i, array) => {
                    return (<div className={classes.componentItem}>
                        <div className={classes.labelItem}>
                            <Typography>{form.title}</Typography>
                        </div>
                        <div className={classes.textFieldItem}>
                            <TextField
                                id="outlined-multiline-flexible"
                                // label="Multiline"
                                multiline
                                rowsMax={8}
                                value={form.value}
                                onChange={(event) => handleChange(event, form.key)}
                                variant="outlined"
                                size="small"
                            />
                        </div>
                    </div>)
                })}

                <div className={classes.rowButtonLayout}>
                    <Button onClick={updateSelfUserData} size="small" variant="contained" color="primary">UPDATE</Button>
                    <Button size="small" variant="contained" color="primary">CANCEL</Button>
                </div>
            </form>


        </div>
    )
}

export default Profile;