import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',

        margin: '15px auto'
    },
    button: {
        margin: 'auto',
        backgroundColor: '#EA6A47',
        padding: '0.8rem 3.5rem'
    },
    data: {
        margin: 'auto',
        marginLeft: '20px'
    },
    paper: {
        width: '80%',
        backgroundColor: '#5C9BDA',
        color: 'white',
        margin: `${theme.spacing(0.2)}px auto`,
        padding: theme.spacing(2),
    },
}));

const OrderList = props => {
    const classes = useStyles();
    return (
  
             <Grid container className={classes.root}>

                <Paper className={classes.paper} elevation={5}>
                    <Grid container wrap="nowrap">
                        <Grid item xs={12} sm={8} md={10}>
                            <Typography><Typography variant="h6" display="inline">   Order Name: </Typography> {props.name}</Typography>
                            <Typography><Typography variant="h6" display="inline"> Destination:  </Typography>{props.location}</Typography>
                            <Typography> <Typography variant="h6" display="inline"> Date:  </Typography>{props.date}</Typography>

                        </Grid>
                        <Grid container item xs={0} sm={4} md={2}>
                            <Button variant="contained" color='secondary' className={classes.button}>
                                View
                    </Button>
                        </Grid>
                    </Grid>
                </Paper>
                {/* </Paper> */}
            </Grid>
        
    )
}

OrderList.propTypes = {

}

export default OrderList

