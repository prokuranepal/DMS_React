import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import {weatherData} from './weatherData';
// import WeatherList from './WeatherList';
// import Button from '@material-ui/core/Button';
// import { datePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';

/**
 * This shows the weather detail of a particular place.
 * @param {Double} props.temp- temperature in degree celsius
 * @param {string} props.place- place
 * @param {string} props.day- day
 * @param {string} props.time- time
 * @param {string} props.description- Description of the weather
 * @param {Double} props.humidity- humidity in %
 * @param {Double} props.wind- wind speed in mph
 * @param {Icon} props.iconId- icon according to weather
 * @returns {FlightInfo} - Returns a a card view of weather details
 * 
 */



const WeatherDetail = (props) => {

  // const {city, list} = weatherData;
  // if (!city) {
  //   return <div>Loading...</div>
  // }

  // TODO: refactoring this code...

  let bgColorClass = '#ff4500';
  // Set the background colour based on the temperature
  if (props.temp >= 30) {
    bgColorClass = '#F6A000';
  } else if (props.temp > 20 && props.temp < 30) {
    bgColorClass = '#99CC00';
  } else if (props.temp > 10 && props.temp < 20) {
    bgColorClass = '#00BCBC';
  } else if (props.temp > 0 && props.temp < 10) {
    bgColorClass = '#0042AE';
  } else if (props.temp <= 0) {
    bgColorClass = '#0042AE';
  }
  console.log(bgColorClass);

  const useStyles = makeStyles((theme) => ({
    cardHeader: {
      padding: '40px 20px',
      marginBottom: 0,
      textAlign: 'center',
      position: 'relative',
      borderTopLeftRadius: '0.375rem',
      borderTopRightRadius: '0.375rem',
      overflow: 'hidden',
      backgroundColor: bgColorClass
    }
  }));
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    const sss = s.split(" ");
    const d = sss.map(ss => ss.charAt(0).toUpperCase() + ss.slice(1) + " ");
    return d.join().replace(',', '');

    // s.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
    // return s;
  }

  const classes = useStyles();


  return (
    <div className='detail-weather-widget' >
      <div className={classes.cardHeader}>
        <div className="text-white mt-0">
          <h2 className="card-heading">{props.place}</h2>
          <p className="sub-heading">{props.day + ", " + props.time + ", " + capitalize(props.description)}</p>

          <div className="temp-section">
            <h2 className="temp-point">{props.temp}
              <small><sup><sup>°</sup>C</sup></small>
            </h2>
            <div className="pl-2 pl-md-4">
              <i className={"detail-icon wi wi-owm-" + props.iconId} />
            </div>
          </div>
          <h4>Humidity:{" " + props.humidity}%</h4>
          <h3>Wind:{" " + props.wind}mph</h3>
        </div>

        {/* <div className="jr-card-body">
        <div className={bgColorClass + " mb-4 mb-md-3 row"}>
          <div className="col-5">
            <p className="jr-fs-15 mb-0">Humidity</p>
          </div>
          <div className="col-4">
            <p className="mb-0">{props.humidity}%</p>
          </div>

        </div>
      </div> */}
      </div>
    </div>
  )
};

export default WeatherDetail;
