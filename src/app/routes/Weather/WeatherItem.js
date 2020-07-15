import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import WeatherIcon from './WeatherIcon';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      
      width: '100%'
    },
    content: {
      flex: '1 0 auto',
    },
    cardMedia: {
      height: 150
    }
  }),
);

const WeatherItem = props => {
  const classes = useStyles();
  let bgColorClass = 'list-weather-widget ';
  // Set the background colour based on the props.temperature
  if (props.temp >= 30) {
    bgColorClass += 'very-warm';
  } else if (props.temp > 20 && props.temp < 30) {
    bgColorClass += 'warm';
  } else if (props.temp > 10 && props.temp < 20) {
    bgColorClass += 'normal';
  } else if (props.temp > 0 && props.temp < 10) {
    bgColorClass += 'cold';
  } else if (props.temp <= 0) {
    bgColorClass += 'very-cold';
  }
  return (
    <Card className={classes.root}>
      <Grid container >
        <Grid item container xs={8}>
          <CardContent className={classes.content}>
            <Typography component="h6">
              {props.place}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {props.date}
            </Typography>
            <Divider />
            <Typography variant="h4">
              {props.temp}°C
          </Typography>
            <Typography variant="caption">
              {props.min}/{props.max}°C
          </Typography>
            <Typography variant="subtitle1">
              {props.description}
            </Typography>
            <Divider />
            <Typography variant="body2">
              Wind: {props.wind}mph
          </Typography>
            <Typography variant="body2">
              Humidity: {props.humidity}%
          </Typography>
          </CardContent>
        </Grid>
        <Grid item container xs={4} alignItems="center">

          <div>
            <div className="pl-2 pl-md-4">
              <i className={"text-black jr-fs-xl wi wi-owm-" + props.iconId} />
            </div>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}

export default WeatherItem;