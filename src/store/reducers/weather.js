import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
export const initialState = {

    weatherData: []

}

const setWeatherData = (state, action)=> {
    // console.log(action.weatherData);
    return updateObject(state, {weatherData: action.weatherData})
};

// const getWeatherStart = (state, action) => {
//         return updateObject(state, {weatherData: "Hello"})
// }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_WEATHER_DATA: return setWeatherData(state, action);
        // case actionTypes.GET_WEATHER_DATA_START: return getWeatherStart(state,action);
        default:
            return state;
    }
};

export default reducer;