import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    cardData: null,
    graphs: null,
    loading: true,
    error: {},
    places: [],
    // healthposts: [],
    // hospitals:[]
}

const cardError = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const getCards = (state, action) => {

    return updateObject(state, {
        cardData: action.data.cardData,
        graphs: action.data.graphs,
        loading: false
    })
}

const setPlaces = (state, action) => {

    return updateObject(state, {
        places: action.places
    })
}

const setHealthposts = (state, action) => {

    return updateObject(state, {
        healthposts: action.healthposts
    })
}

const setHospitals = (state, action) => {
    return updateObject(state, {
        hospitals: action.hospitals
    })
}




const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CARDS_SUCCESS: return getCards(state, action);
        case actionTypes.GET_CARDS_FAIL: return cardError(state, action);
        case actionTypes.GET_PLACES_SUCCESS: return setPlaces(state, action);
        case actionTypes.GET_HEALTHPOSTS_SUCCESS: return setHealthposts(state, action);
        // case actionTypes.GET_HOSPITALS_SUCCESS: return setHospitals(state, action)
        default:
            return state;
    }
};

export default reducer;