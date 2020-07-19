export const SET_ALGORITHM = "SET_ALGORITHM";
export const OPEN_MENU = "OPEN_MENU";

export const setAlgorithm = algorithmIndex => ({
    type: SET_ALGORITHM,
    payload: {
        algorithmIndex:  algorithmIndex 
    }
});