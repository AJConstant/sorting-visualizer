import { SET_COMPARED, SET_TO_SWAP, SET_ARRAY } from '../actions';

const initialState = {
    array: [],
    compared: [],
    toSwap: [],
    sorted: []
}

const algorithmReducer = (state = initialState, action) => {
    if (!action.type) {
        return state
    }
    switch (action.type) {
        case SET_ARRAY:
            const { array } = action.payload;
            return {
                ...state,
                array: array
            }

        case SET_COMPARED:
            const { compared } = action.payload;
            return {
                ...state,
                compared: compared
            }
        case SET_TO_SWAP:
            const { toSwap } = action.payload;
            return {
                ...state,
                toSwap: toSwap
            }
        default:
            return state;
    }
}

export default algorithmReducer;