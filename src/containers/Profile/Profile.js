import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

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
}));

/**
 * This shows the seditable profile page.
 * @returns {Profile} - Returns a list of input fields for user profile 
 * @argument {Profile} - No Arguments
 */

const Profile = () => {

    const classes = useStyles();

    const [state, setState] = React.useState([
        { title: "Full Name", value: "" },
        { title: "Hospital Name", value: "" },
        { title: "Province", value: "" },
        { title: "District", value: "" },
        { title: "Town/ City", value: "" },
    ])

    const handleChange = (event, index) => {
        // console.log(event.target.value);
        let element = state[index];
        element = {
            ...element,
            value: event.target.value
        }
        let newState = [...state];
        newState.splice(index, 1, element);
        setState(newState);
    }

    return (
        <div className={classes.root}>
            <div>
                <Typography variant="h5" >User Profile</Typography>
            </div>
            <form noValidate autoComplete="off">
                {state.map((form, i, array) => {
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
                                onChange={(event) => handleChange(event, i)}
                                variant="outlined"
                                size="small"
                            />
                        </div>
                    </div>)
                })}

            </form>
        </div>
    )
}

export default Profile;