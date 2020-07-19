import { SET_ALGORITHM } from './../actions';

const initialState = {
    algorithmIndex: 0
};

const algorithmReducer = (state = initialState, action) => {
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

export default algorithmReducer;
