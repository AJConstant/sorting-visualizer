import { SET_ALGORITHM, SET_ARRAY_SIZE, TOGGLE_DARK_MODE } from '../actions';

const initialState = {
    arraySize: 10,
    algorithmIndex: 0,
    darkMode: false
};

const topBarReducer = (state = initialState, action) => {
    if(!state){
        return state;
    }
    switch(action.type) {
        case SET_ALGORITHM:
            const { algorithmIndex } = action.payload;
            return {
                ...state,
                algorithmIndex: algorithmIndex
            }
        case TOGGLE_DARK_MODE: 
            return {
                ...state,
                darkMode: !state.darkMode
            }
        case SET_ARRAY_SIZE:
            const { arraySize } = action.payload;
            return {
                ...state,
                arraySize: arraySize
            }
        default:
            return state;
    }
}

export default topBarReducer;
