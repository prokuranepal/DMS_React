// import axios from 'axios';

import { GET_CARDS, CARD_ERROR } from './actionTypes';
import * as axios from '../../response/falseFetch';
import * as actionTypes from './actionTypes';
export const getCurrentCards = () => async dispatch => {
    try {
        // const res = await axios.get('api/dashboard');
        const res = {
            data: {
                cards: [
                    {
                      cardColor: 'primary',
                      icon: 'airplane',
                      title: '09',
                      subTitle: 'Drones'
                    }, {
                      cardColor: 'secondary',   
                      icon: 'flight-takeoff',
                      title: '457',
                      subTitle: 'Flying drone'
                    }, {
                      cardColor: 'info',
                      icon: 'assignment-check',
                      title: '247',
                      subTitle: 'Delivery made'
                    }, {
                      cardColor: 'warning',
                      icon: 'hospital-alt',
                      title: '09',
                      subTitle: 'Health post'
                    },
                  ],
                graphs: {
                    graphData: [
                        {name: 'Jan', Medicine: 4000, Drone: 2400, amt: 2400},
                        {name: 'Feb', Medicine: 3000, Drone: 1398, amt: 2210},
                        {name: 'Mar', Medicine: 2000, Drone: 9800, amt: 2290},
                        {name: 'Api', Medicine: 2780, Drone: 3908, amt: 2000},
                        {name: 'May', Medicine: 1890, Drone: 4800, amt: 2181},
                        {name: 'Jun', Medicine: 2390, Drone: 3800, amt: 2500},
                        {name: 'Jul', Medicine: 3490, Drone: 4300, amt: 2100},
                        {name: 'Aug', Medicine: 2390, Drone: 3800, amt: 2500},
                        {name: 'Sep', Medicine: 3490, Drone: 4300, amt: 2100},
                        {name: 'Oct', Medicine: 2390, Drone: 3800, amt: 2500},
                        {name: 'Nov', Medicine: 3490, Drone: 4300, amt: 2100},
                        {name: 'Dec', Medicine: 3490, Drone: 4300, amt: 2100},

                    ],
                    sidechartdata: {
                        name: "Hospital",
                        chartData: [10, 200, 75, 300, 100, 200, 70],
                        labels: ['9', '10', '11', '12', '13', '14', '15'],
                    },
                    cdc: [{ x: 10, y: 20 }, { x: 15, y: 10 }, { x: 20, y: 15 }],
                    rhps: [
                        [{ x: 10, y: 20 }, { x: 15, y: 10 }, { x: 20, y: 15 }],
                        [{ x: 10, y: 20 }, { x: 15, y: 10 }, { x: 20, y: 15 }],
                        [{ x: 10, y: 20 }, { x: 15, y: 10 }, { x: 20, y: 15 }]
                    ]
                }

            }
        }
        dispatch({
            type: GET_CARDS,
            data: res.data
        })

    } catch (error) {
        dispatch({
            type: CARD_ERROR,
            // error: error.response.statusText, 
            // status: error.response.status 
            error: "data not found"
        })
    }
}

export const getPlaces = () => {
    return dispatch => {
        const url = './places.js';
        axios.get(url).then(response => {
            dispatch(setPlaces(response.placesResponse));
        })
    }
}

export const setPlaces = (places) => {
    return {
        type: actionTypes.SET_PLACES,
        places: places
    }
}