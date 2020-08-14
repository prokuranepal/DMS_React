import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ImsCard from '../../../../homeComponents/imsCard/ImsCard';
import types from '../../../../JSONFiles/medicineTypes';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
// import ProductGridItem from 'components/eCommerce/ProductGridItem'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '90%',
        margin: 'auto',
        marginTop: '20px'
    },
    type: {
        marginTop: '20px'
    }
});

const Ims = () => {
    const classes = useStyles();
    // console.log(types);
    return (
        // <Grid container className={classes.root} spacing={2}>
        //     <Grid container item xs={12}>
        //         <Grid xs={10}>
        //         </Grid>
        //         <Grid container justify="center" xs={2}>
        //             <Link className={classes.button} to='/app/ims/orders/lists' style={{ textDecoration: 'none', color: 'white' }}>
        //                 <Button variant="contained" color='secondary' >Orders </Button>
        //             </Link>
        //         </Grid>
        //     </Grid>
            // {/* <Grid item xs={12} className={classes.type}> */}
            <div className="app-wrapper">
                <div className="animated slideInUpTiny animation-duration-3">
                    <div className="row products-grid-row">
                        {types.map((type, index) => (
                            <ImsCard key={index} type={type} />
                        ))}
                    </div>
                </div>
                </div>
            // {/* </Grid> */}
        // </Grid>
    );
};

export default Ims;