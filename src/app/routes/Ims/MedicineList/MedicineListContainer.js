import React from 'react';
import MedicineList from './MedicineList';
import Search from '../../../../homeComponents/UI/Search/Search';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBackRounded';
import { Link, Redirect } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
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

    const goToAddMedicine = () => {
        return <Redirect to="/app/ims/addmedicine" />
    }
    return (
        <div className="app-wrapper">
            <Grid container xs={12} >
                <Grid item xs={1} justify="center" alignItems="flex-end" container>
                    <Link to='/app/ims/categories' style={{ textDecoration: 'none', color: 'white' }}>
                        <IconButton type="submit" aria-label="search">
                            <ArrowBackIcon />
                        </IconButton>
                    </Link>
                </Grid> 
                <Grid item lg={3} md={3} sm={3} xs={5} justify="center" alignItems="center" container>
                    <Typography variant="h5">{props.location.aboutProps ? props.location.aboutProps.name : "Medicines"}</Typography>
                </Grid>
                <Grid item lg={6} md={5} sm={5} xs={1} justify="flex-end" container>
                    <Hidden xsDown>
                        <Search />
                    </Hidden>
                </Grid>
                <Grid item lg={2} md={3} sm={3} xs={5} justify="center" container>
                    {/* <Hidden xsDown> */}
                    <Link to='/app/ims/addmedicine' style={{ textDecoration: 'none', color: 'white' }}>
                        <Button data-test="buttonComp" onClick={goToAddMedicine} variant="contained" color="primary">Add Item</Button>
                        </Link>
                    {/* </Hidden> */}
                </Grid>

            </Grid>
            <MedicineList />
        </div>

    );
}

export default MedicineListContainer;