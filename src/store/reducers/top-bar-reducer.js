import { SET_ALGORITHM } from '../actions';

const initialState = {
    initialArraySize: 10,
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
        default:
            return state;
    }
}

export default topBarReducer;
