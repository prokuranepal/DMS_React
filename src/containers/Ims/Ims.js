import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import ImsCard from '../../components/imsCard/ImsCard';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '100%'
    },
    paper: {
        height: 140,
        width: 100,
    }
});

const Ims = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
            <Grid
                container
                spacing={0}
            >
                <Grid
                    item
                    lg={3}
                    sm={6}
                >
                    <Paper className={classes.paper} />
                    {/* <ImsCard title='Medicine type' name='Medicine name' /> */}
                </Grid>
                <Grid
                    item
                    lg={3}
                    sm={6}
                >
                    <Paper className={classes.paper} />
                    {/* <ImsCard title='Medicine type' name='Medicine name' /> */}
                </Grid>
                <Grid
                    item
                    lg={3}
                    sm={6}
                >
                     <Paper className={classes.paper} />
                    {/* <ImsCard title='Medicine type' name='Medicine name' /> */}
                </Grid>
                <Grid
                    item
                    lg={3}
                    sm={6}
                >
                     <Paper className={classes.paper} />
                    {/* <ImsCard title='Medicine type' name='Medicine name' /> */}
                </Grid>
            </Grid>
            </Grid>
        </Grid>
    );
};

export default Ims;