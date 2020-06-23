import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import WeatherItem from './WeatherItem';
import places from '../../JSONFiles/weather';
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

const Weather = () => {
    const classes = useStyles();
    // console.log(types);
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12} className={classes.type}>
                <Grid container spacing={2}>
                    {places.map(place => {
                        return <Grid key={place.place} item lg={6} sm={6}>
                            <WeatherItem place={place.place} temp={place.temp} min={place.min} 
                            max={place.max} wind={place.wind} humidity={place.humidity} 
                            description={place.description} image={place.image}
                            date={place.date}/>
                        </Grid>
                    })}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Weather;