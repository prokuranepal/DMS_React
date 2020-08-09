import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    cardData: null,
    graphs: null,
    loading: true,
    error: {},
    places: []
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



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CARDS: return getCards(state, action);
        case actionTypes.CARD_ERROR: return cardError(state, action);
        case actionTypes.SET_PLACES: return setPlaces(state, action);
        default:
            return state;
    }
};

export default reducer;