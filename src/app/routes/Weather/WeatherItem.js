import React from 'react'
// import {weatherData} from './weatherData';
// import WeatherList from './WeatherList';
// import Button from '@material-ui/core/Button';
// import { datePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';

const WeatherDetail = (props) => {

  // const {city, list} = weatherData;
  // if (!city) {
  //   return <div>Loading...</div>
  // }

  // TODO: refactoring this code...

  let bgColorClass = 'detail-weather-widget ';
  // Set the background colour based on the temperature
  if (props.temp >= 30) {
    bgColorClass += 'very-warm';
  } else if (props.temp.toFixed(1) > 20 && props.temp.toFixed(1) < 30) {
    bgColorClass += 'warm';
  } else if (props.temp.toFixed(1) > 10 && props.temp.toFixed(1) < 20) {
    bgColorClass += 'normal';
  } else if (props.temp.toFixed(1) > 0 && props.temp.toFixed(1) < 10) {
    bgColorClass += 'cold';
  } else if (props.temp.toFixed(1) <= 0) {
    bgColorClass += 'very-cold';
  }
  console.log(bgColorClass);
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    const sss = s.split(" ");
    const d = sss.map(ss => ss.charAt(0).toUpperCase() + ss.slice(1) + " ");
    return d.join().replace(',', '');

    // s.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
    // return s;
  }

  return (
    <div className={bgColorClass}>
      <div className="jr-card-header text-white mt-0">
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
  )
};

export default WeatherDetail;
