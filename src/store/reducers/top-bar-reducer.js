import { SET_ALGORITHM, SET_ARRAY_SIZE } from '../actions';

const initialState = {
    arraySize: 10,
    algorithmIndex: 0
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
