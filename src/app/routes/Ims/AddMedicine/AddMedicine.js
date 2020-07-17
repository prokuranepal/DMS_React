import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DatePicker } from '@material-ui/pickers';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import IntlMessages from '../../../../util/IntlMessages';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import * as actions from '../../../../store/actions/imsMedicine';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import { makeStyles, Theme, createStyles } from '@material-ui/styles';
import classNames from 'classnames';

import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBackRounded';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            margin: theme.spacing.unit,
            position: 'relative',
        },
        buttonSuccess: {
            backgroundColor: green[500],
            color: grey[50],
            '&:hover': {
                backgroundColor: green[700],
            },
        },
        buttonProgress: {
            color: green[500],
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: -12,
            marginLeft: -12,
        },
    }));

const AddMedicine = props => {


    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [quantity, setQuanity] = useState(0);
    const [selectedDate, setDate] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const dispatch = useDispatch();

    const classes = useStyles();
    const handleChange = key => event => {
        // console.log(key, event);
        switch (key) {
            case 'name':
                setName(event.target.value);
                break;
            case 'type':
                setType(event.target.value);
                break;
            case 'quantity':
                setQuanity(event.target.value);
                break;
            case 'selectedDate':
                setDate(event);
                break;
            default:
                return;
        }
    };

    const addMedicine = async () => {
        setLoading(true);
        await dispatch(actions.addMedicine({ name, type, quantity, selectedDate }))
        setLoading(false);
        props.history.push('/app/ims/medicinelist');
    }

    const buttonClassname = classNames({
        [classes.buttonSuccess]: success,
    });

    return (
        // <div >
        <div className="login-content mt-5">
            <Grid container>
            <Grid item xs={2} justify="center" alignItems="flex-end" container>
                <Link to='/app/ims/medicinelist' style={{ textDecoration: 'none', color: 'white' }}>
                    <IconButton type="submit" aria-label="search">
                        <ArrowBackIcon />
                    </IconButton>
                </Link>
            </Grid>
            <Grid item xs={6} justify="center" alignItems="center" container>
                <Typography variant="h5">Add Medicine</Typography>
            </Grid>
            </Grid>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className="login-form">
                    <div style={{padding: '30px'}}>
                    <form className="row" noValidate autoComplete="off">
                        {/* <div className="col-md-3 col-12"> */}
                        <fieldset>
                            <TextField
                                id="name"
                                label={<IntlMessages id="appModule.medicine.name" />}
                                value={name}
                                onChange={handleChange('name')}
                                margin="normal"
                                fullWidth
                                className="mt-1"
                            />
                            <FormControl className="w-100 mb-2">
                                <InputLabel htmlFor="age-native-simple">Type</InputLabel>
                                <Select
                                    native
                                    value={type}
                                    onChange={handleChange('type')}
                                    input={<Input id="age-native-simple" />}

                                >
                                    <option value="" />
                                    <option value={10}>Liquid</option>
                                    <option value={20}>Tablets</option>
                                    <option value={30}>Capsules</option>
                                    <option value={40}>Topical</option>
                                    <option value={50}>Suppositories</option>
                                    <option value={60}>Drops</option>
                                    <option value={70}>Inhalers</option>
                                    <option value={80}>Injections</option>
                                    <option value={90}>Patches</option>
                                </Select>
                            </FormControl>
                            <TextField
                                id="quantity"
                                label="Quantity"
                                value={quantity}
                                type="number"
                                onChange={handleChange('quantity')}
                                margin="normal"
                                fullWidth
                                className="mt-1"
                            />
                            <FormControl className="w-100 mb-2">
                                <DatePicker
                                    label="Expiry Date"
                                    value={selectedDate}
                                    onChange={handleChange('selectedDate')}
                                    animateYearScrolling={false}
                                    className="mt-1"
                                />
                            </FormControl>
                            <div className={classes.wrapper}>
                                <Button onClick={addMedicine} disabled={loading} color="primary" variant="contained" className={buttonClassname}>
                                    <IntlMessages id="appModule.addItem" />
                                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                                </Button>
                            </div>

                        </fieldset>
                        
                    </form>
                    </div>
                </div>
            </MuiPickersUtilsProvider>
        </div>
        // </div>
    )
}

export default AddMedicine;