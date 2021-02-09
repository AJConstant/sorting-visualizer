export const SET_ALGORITHM = "SET_ALGORITHM";
export const SET_ARRAY = "SET_ARRAY";
export const SET_COMPARED = "SET_COMPARED";
export const SET_TO_SWAP = "SET_TO_SWAP";
export const SET_RUNNING = "SET_RUNNING";
export const SET_SORTED = "SET_SORTED";
export const SET_PIVOT = "SET_PIVOT";
export const SET_ARRAY_SIZE = "SET_ARRAY_SIZE";
export const RESET_META_DATA = "RESET_META_DATA";
export const SET_TRACE = "SET_TRACE";
export const SET_IN_PLAYBACK = "SET_IN_PLAYBACK";
export const TOGGLE_DARK_MODE = "TOGGLE_DARK MODE";

/** Settings Actions */
export const setAlgorithm = algorithmIndex => ({
    type: SET_ALGORITHM,
    payload: {
        algorithmIndex:  algorithmIndex 
    }
});

export const toggleDarkMode = () => ({
    type: TOGGLE_DARK_MODE,
    payload: {}
})

export const setRunning = running => ({
    type: SET_RUNNING,
    payload: {
        running: running
    }
});

export const setArraySize = size => ({
    type: SET_ARRAY_SIZE,
    payload: {
        arraySize: size
    }
});

/** Trace Playback Actions */
export const setTrace = trace => ({
    type: SET_TRACE,
    payload: {
        trace: trace
    }
});

export const setInPlayback = (inPlayback) => ({
    type: SET_IN_PLAYBACK,
    payload: {
        inPlayback: inPlayback
    }
})

/** Sorting Actions */
export const resetMetaData = () => ({
    type: RESET_META_DATA,
    payload: {}
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

export const setPivot = pivot => ({
    type: SET_PIVOT,
    payload: {
        pivot: pivot
    }
})

export const setSorted = sorted => ({
    type: SET_SORTED,
    payload: {
        sorted: sorted
    }
})