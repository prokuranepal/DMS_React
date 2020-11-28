import axios from 'axios';
import * as axioss from '../../response/falseFetch';
import * as actionTypes from './actionTypes';

const getWeatherByPlace = async (p) => {
    const api = '7d075324e76eb73bf9c70e7381fa4bc6';
    const place = p;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${api}`;
    // console.log(url);
    try {
        const response = await axios.get(url);
        // console.log(response.statusText);
        if (response.statusText === "OK") {
            // console.log(response);
            const res = {
                place: place,
                main: response.data.weather[0].description,
                iconId: response.data.weather[0].id,
                temp: (response.data.main.temp - 273).toFixed(2),
                temp_min: (response.data.main.temp_min - 273).toFixed(2),
                temp_max: (response.data.main.temp_max - 273).toFixed(2),
                humidity: response.data.main.humidity,
                wind_speed: response.data.wind.speed
            }
            // console.log(res);
            return res;
        } else {
            throw new Error("Error");
        }
    } catch (e) {
        console.log(e.message);
    }
}

// const getWeatherByLatLon = async (lat, lon) => {
//     const api = '7d075324e76eb73bf9c70e7381fa4bc6';
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;
//     console.log(url);
//     try {
//         const response = await axios.get(url);
//         // console.log(response.statusText);
//         if (response.statusText === "OK") {
//             // console.log(response);
//             const res = {
//                 lat: lat,
//                 lon: lon,
//                 main: response.data.weather[0].description,
//                 iconId: response.data.weather[0].id,
//                 temp: (response.data.main.temp - 273).toFixed(2),
//                 temp_min: (response.data.main.temp_min - 273).toFixed(2),
//                 temp_max: (response.data.main.temp_max - 273).toFixed(2),
//                 humidity: response.data.main.humidity,
//                 wind_speed: response.data.wind.speed
//             }
//             // console.log(res);
//             return res;
//         } else {
//             throw new Error("Error");
//         }
//     } catch (e) {
//         console.log(e.message);
//     }
// }

export const getWeather = () => {
    return async (dispatch, getState) => {
        // const places = getState().dashboard.places.data;
        // const places = ["Dharan"];
        // console.log(places);
        const weathers = [];
        const url = './places.js';
        return axioss.get(url).then(response => {
            dispatch(setPlaces(response.placesResponse));
            const places = response.placesResponse.data;
            // console.log(places);
            dispatch(getWeatherStart());
            Promise.all(places.map(async (place) => {
                return getWeatherByPlace(place)
                // console.log("Weather",weather);
                // weathers.push(weather);
            })).then(res => {
                console.log(res);
                dispatch(setWeather(res));
                console.log("Done");
            });
        })

    }
    // console.log(res);
}

export const getWeatherStart = () => {
    return {
        type: actionTypes.GET_WEATHER_DATA_START
    }
}

export const setWeather = (data) => {
    return {
        type: actionTypes.SET_WEATHER_DATA,
        weatherData: data
    }
}
// export const sendResetPassword = () => {
//     return {
//         type: actionTypes.RESET_PASSWORD
//     }
// }

export const setPlaces = (places) => {
    return {
        type: actionTypes.SET_PLACES,
        places: places
    }
}