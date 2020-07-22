import { 
    setCompared, 
    setToSwap, 
    setRunning, 
    setPivot,
    setArray,
    resetMetaData } from '../store/actions';

const available_algorithms = [
    'Bubble Sort',
    'Merge Sort',
    'Quick Sort',
    'Insertion Sort',
    'Heap Sort'
]

const array_sizes = [5, 10, 25, 50, 75, 100, 150]
const sorting_animation_delays = [500, 250, 100, 50, 25, 0, 0]

const mapArraySizeToSpeed = (arraySize) => {
    const idx = array_sizes.indexOf(arraySize);
    return sorting_animation_delays[idx === -1? 2 : idx];
}

const updateState = (trace, dispatch, arraySize) => {
    const speed = mapArraySizeToSpeed(arraySize);
    updateStateHelper(trace, dispatch, speed);
};

const updateStateHelper = (trace, dispatch, speed) => {
    if (!trace.length) {
        dispatch(setCompared([]));
        dispatch(setToSwap([]));
        dispatch(setPivot([]));
        dispatch(setRunning(false));
        return;
    }
    dispatch(trace.shift());
    setTimeout(() => {
        updateStateHelper(trace, dispatch, speed)
    }, speed)
}

const createArray = (arraySize, dispatch) => {
    let array = [];
    while (array.length < arraySize) {
        array.push(Math.floor(Math.random() * 200) + 5);
    }
    dispatch(setArray(array));
    dispatch(resetMetaData());
};


export { available_algorithms };
export { array_sizes };
export { createArray };
export { updateState };
