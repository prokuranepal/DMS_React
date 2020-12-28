import React, { useEffect, useState, useCallback } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import WeatherItem from './WeatherItem';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions/weather';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '90%',
        margin: 'auto',
        marginTop: '20px'
    },
    type: {
        marginTop: '20px'
    },
    progress: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

/**
 * This shows the weather of different places.
 * @param  - No Parameters
 * @returns {Weather} - Returns a grid of cards of weather
 * 
 */

const Weather = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const weather = useSelector(({ weather }) => weather.weatherData);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    // console.log(types);

    // const loadWeather = useCallback(async () => {
    //     setError(null);
    //     // setIsLoading(true);
    //     setIsRefreshing(true);
    //     try {
    //         await dispatch(actions.getWeather());
    //     } catch (error) {
    //         setError(true);
    //     }
    //     // setIsLoading(false);
    //     setIsRefreshing(false);
    // }, [dispatch, setIsLoading, setError]);

    // useEffect(() => {
    //     setIsLoading(true);
    //     loadWeather().then(() => {
    //         setIsLoading(false);
    //     });
    // }, [dispatch, loadWeather]);

    useEffect(() => {
        // dispatch(authActions.authStart());
        // dispatch(authActions.setInitURL('/weather'));
        dispatch(actions.getWeather());

    }, [dispatch]);
    if (error) {
        return <p>Error</p>
        // <View style={styles.centered}>
        //     <Text>An error occurred</Text>
        //     <Button title="Try Again" onPress={loadProducts} color={Colors.primary} />
        // </View>
    }

    if (isLoading) {
        return <div className={classes.progress}><LinearProgress /></div>
    }

    if (weather.length === 0) {
        return <div className={classes.progress}><LinearProgress /></div>
    }
    const currentdate = new Date();
    const time = currentdate.getHours() + ":"
        + (currentdate.getMinutes() < 10?('0'+currentdate.getMinutes()):currentdate.getMinutes());
    console.log(time);
    const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12} className={classes.type}>
                <Grid container spacing={2}>
                    {weather.map(place => {
                        return <Grid key={place.place} item lg={4} md={4} sm={4} xs={6}>
                            <div className="jr-card jr-weather-card">
                                <WeatherItem place={place.place} temp={place.temp} min={place.temp_min}
                                    max={place.temp_max} wind={place.wind_speed} humidity={place.humidity}
                                    description={place.main} iconId={place.iconId} time={time} day={days[currentdate.getDay()]}
                                // date={place.date}
                                />
                            </div>
                        </Grid>
                    })}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Weather;