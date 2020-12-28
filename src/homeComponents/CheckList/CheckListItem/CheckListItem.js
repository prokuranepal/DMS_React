import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        // flexWrap: 'wrap',
        fontSize: '15px',
        margin: '2px',
        backgroundColor: '#495057',
        borderRadius: '10px',
    },
    body: {
        flex: '1 1',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        paddingLeft: '15px'
    },
    header: {
        fontSize: '15px',
        marginBottom: '0px',
    }
}));

/**
* A single item in a checklist containing a label with a checkbox
*
* @param {string} props.name - name of the check parameter
* @param {Function} props.onChange - function to change the state of checkbox ticked or unticked
* @returns {Checkbox} - It returns a checkbox with a label
*/

const CheckListItem = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root} data-test="container-component">


            <div className={classes.body}>
                <p className={classes.header}>{props.name}</p>
            </div>
            <Checkbox
                checked={props.checked}
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
                onChange={props.onChange}
                data-test="checkbox-component"
            />
        </div>
    )
};

export default CheckListItem;