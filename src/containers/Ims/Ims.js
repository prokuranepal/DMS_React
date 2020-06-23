import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import ImsCard from '../../components/imsCard/ImsCard';
import types from '../../JSONFiles/medicineTypes';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '90%',
        margin: 'auto',
        marginTop: '50px'
    },
    paper: {
        height: 140,
        width: 100,
    }
});

const Ims = () => {
    const classes = useStyles();
    console.log(types);
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
            <Grid
                container
                spacing={0}
            >
                {types.map(medicineType => {
                    return <Grid
                    key={medicineType.ImsCard}
                    item
                    lg={3}
                    sm={6}
                >
                    <ImsCard name={medicineType.name} image={medicineType.image} />
                </Grid>
                })}
                
                
            </Grid>
            </Grid>
        </Grid>
    );
};

export default Ims;