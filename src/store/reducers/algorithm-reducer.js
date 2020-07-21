import { SET_COMPARED, SET_TO_SWAP, SET_ARRAY, SET_RUNNING, SET_SORTED, RESET_META_DATA, SET_PIVOT } from '../actions';

const initialState = {
    running: false,
    pivot : [],
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
        case SET_RUNNING:
            const { running } = action.payload;
            return {
                ...state,
                running: running
            }
        case SET_SORTED:
            const { sorted } = action.payload;
            return {
                ...state,
                sorted: sorted
            }
        case SET_PIVOT:
            const { pivot } = action.payload;
            return {
                ...state,
                pivot: pivot
            }
        case RESET_META_DATA:
            return {
                ...state,
                compared: [],
                toSwap: [],
                sorted: [],
                pivot: []
            }
        default:
            return state;
    }
}

export default algorithmReducer;