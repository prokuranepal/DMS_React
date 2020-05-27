import { GET_CARDS, CARD_ERROR } from "../actions/actionTypes";


const initialState = {
    cards: {},
    graphs: {},
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_CARDS:
            return {
                ...state,
                cards: payload.cards,
                graphs: payload.graphs,
                loading: false
            };
        case CARD_ERROR:
                return {
                 ...state,
                 error: payload,
                 loading: false
            };
        default:
            return state;


    }
}