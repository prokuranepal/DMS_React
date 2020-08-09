import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        color: 'white'
    },
    buttons: {
        display: 'flex',
        flex: '0 0',
        margin: '10px auto',
        justifyContent: 'space-evenly',
        color: 'white',
        alignItems: 'center',
    },
    inputContainer: {
        display: 'flex',
        flex: '0 0',
        margin: '10px auto',
        justifyContent: 'space-between',
        color: 'white',
        alignItems: 'center',
        width: '80%'
    },
    form: {
        display: 'block',
        border: 'solid 2px #686F76',
        borderRadius: '5px',
        margin: '10px auto',
        width: '90%'
    },


}));

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#686F76',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
                color: 'white'
            },
        },
    },
})(TextField);

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#495057',
        border: '1px solid #686F76',
        fontSize: 16,
        color: 'white',
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        '&:focus': {
            borderRadius: 4,
            borderColor: 'white',
        },
    },
}))(InputBase);

const MissionData = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.buttons}>
                <div><Button onClick={props.openMission} size="small" variant="contained" color="primary">Open Mission</Button></div>
                <div> {props.create ? <Button onClick={props.onFinishMission} size="small" variant="contained" color="primary">Finish Mission</Button>
                    : <Button onClick={props.onCreateMission} size="small" variant="contained" color="primary">Create Mission</Button>}</div>
            </div>
            <div className={classes.form}>
                <div className={classes.inputContainer}><p>Edit Mission</p></div>
                <form noValidate autoComplete="off">
                    <div className={classes.inputContainer}>
                        <CssTextField
                            style={{ width: '100%' }}
                            size="small"
                            defaultValue=""
                            variant="outlined"
                            label="Mission Name"
                        />
                    </div>
                    <div className={classes.inputContainer}>
                        <span>Mission Speed (m/s)</span>
                        <CssTextField
                            style={{ width: '30%' }}
                            size="small"
                            defaultValue=""
                            variant="outlined"
                        />
                    </div>
                    <div className={classes.inputContainer}>
                        <span>Mission Radius (m)</span>
                        <CssTextField
                            style={{ width: '30%' }}
                            size="small"
                            defaultValue=""
                            variant="outlined"
                        />
                    </div>
                    <div className={classes.inputContainer}>
                        <Select
                            native
                            variant="outlined"
                            input={<BootstrapInput />}
                            style={{ width: '100%' }}
                        >
                            <option value={10}>Land</option>
                            <option value={20}>Hover</option>
                            <option value={30}>Return to Home</option>
                        </Select>
                    </div>
                </form>
            </div>
            <div className={classes.buttons}>
                <div><Button onClick={props.openMission} size="small" variant="contained" color="primary">Cancel</Button></div>
                <div><Button onClick={props.openMission} size="small" variant="contained" color="primary">Update</Button></div>
            </div>

        </div>
    )
}

export default MissionData;