import React from 'react';
import CheckListItem from './CheckListItem/CheckListItem';
import CustomScrollbars from '../../util/CustomScrollbars';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    header: {
        fontSize: '20px',
        color: 'white',
        margin: 'auto',
        padding: '10px'
    },
    buttonLayout: {
        display: 'flex',
        flexDirection: 'row',
        margin: '20px 20px 15px',
        padding: '0px 30px'
    },
    button: {
        alignSelf: 'flex-end',
        marginLeft: 'auto'
    }

}));



export const checks1 = [{
    name: 'Permission',
    value: false
},
{
    name: 'RTH',
    value: false
},{
    name: 'Calibration',
    value: false
},{
    name: 'Battery Level',
    value: false
}];
/**
 * CheckList component to choose an item from multiple options. For instance to choose different drones in drone control
 * @param {props}  props: abort function to take action on menu abortions
 * @returns {CheckList} - A checklist component to choose items;
 */
 const CheckList = (props) => {
    const classes = useStyles();
   
    const [checks, setChecks] = React.useState(checks1);
    const handleOnChange = (event, index) => {
        const cc = [];
        cc.push(...checks);
        cc[index] = {
            ...cc[index],
            value: event.target.checked};
        setChecks(cc);
    };
    return (
        // <div className="module-list mail-list">
        <FormControl component="fieldset" data-test="container-component">
            <p className={classes.header}>CheckList</p>
        <CustomScrollbars className="module-list-scroll scrollbar"
            style={{ height: 200 >= 800 ? 'calc(100vh - 800px)' : 'calc(100vh - 450px)', minWidth: '300px' }}>
                {checks.map((check, index) =>
                    // <FormControlLabel control={}>
                    <CheckListItem key={index} name={check.name} checked={check.value} onChange={(event) => handleOnChange(event, index)} data-test={`checklist-component${index}`}/>
                )} 
           
        </CustomScrollbars>
        <div className={classes.buttonLayout}>
                        <Button variant="outlined" onClick={props.abort } data-test="abort-component">Abort</Button>
                        <Button variant="outlined" className={classes.button}>Execute</Button>
                        </div>
        </FormControl>
        // </div>
    )
};

export default CheckList;