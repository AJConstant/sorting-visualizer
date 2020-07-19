export const SET_ALGORITHM = "SET_ALGORITHM";
export const SET_ARRAY_SIZE = "SET_ARRAY_SIZE";

export const setAlgorithm = algorithmIndex => ({
    type: SET_ALGORITHM,
    payload: {
        algorithmIndex:  algorithmIndex 
    }
});

export const setArraySize = arraySize => ({
    type: SET_ARRAY_SIZE,
    payload: {
        arraySize: arraySize
    }
});