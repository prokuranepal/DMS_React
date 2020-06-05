import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import ImsCard from '../../components/imsCard/ImsCard';

const useStyles = makeStyles({
    root: {
        flex: 1
    }
  });

const Ims = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={0}
            >
                <Grid
                item
                lg={3}
                sm={6}
                >
                <ImsCard title='Medicine type' name='Medicine name' />
                </Grid>
                <Grid
                item
                lg={3}
                sm={6}
                >
                <ImsCard title='Medicine type' name='Medicine name' />
                </Grid>
                <Grid
                item
                lg={3}
                sm={6}
                >
                <ImsCard title='Medicine type' name='Medicine name' />
                </Grid>
                <Grid
                item
                lg={3}
                sm={6}
                >
                <ImsCard title='Medicine type' name='Medicine name' />
                </Grid>
            </Grid>
        </div>
    );
};

export default Ims;
