import React from 'react';
import MedicineList from './MedicineList';
import Search from '../../../components/UI/Search/Search';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBackRounded';
import {Link} from 'react-router-dom';
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '90%',
        margin: 'auto',
        marginTop: '10px',
        backgroundColor: 'white'
    },
    item: {
        alignContent: 'right'
    }
});

const MedicineListContainer = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container xs={12} >
                <Grid item xs={1} justify="center" alignItems="flex-end" container>
                <Link to='/admin/ims/medicinetypes' style={{textDecoration:'none', color: 'white'}}>
                    <IconButton type="submit" aria-label="search">
                        <ArrowBackIcon />
                    </IconButton>
                    </Link>
                </Grid>
                <Grid item xs={3} justify="center" alignItems="center" container>
                    <Typography variant="h5">{props.location.aboutProps?props.location.aboutProps.name: "Medicines"}</Typography>
                </Grid>
                <Grid item xs={6} justify="flex-end" container>
                    <Search />
                </Grid>
                <Grid item xs={2} justify="center" container>
                    <Button variant="contained" color="primary">Add Item</Button>
                </Grid>

            </Grid>
            <MedicineList />
        </div>

    );
}

export default MedicineListContainer;