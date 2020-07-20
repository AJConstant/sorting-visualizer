export const SET_ALGORITHM = "SET_ALGORITHM";
export const SET_ARRAY = "SET_ARRAY";
export const SET_COMPARED = "SET_COMPARED";
export const SET_TO_SWAP = "SET_TO_SWAP";

export const setAlgorithm = algorithmIndex => ({
    type: SET_ALGORITHM,
    payload: {
        algorithmIndex:  algorithmIndex 
    }
});

export const setArray = array => ({
    type: SET_ARRAY,
    payload: {
        array: array
    }
});

export const setCompared = compared => ({
    type: SET_COMPARED,
    payload: {
        compared: compared
    }
});

export const setToSwap = toSwap => ({
    type: SET_TO_SWAP,
    payload: {
        toSwap: toSwap
    }
});