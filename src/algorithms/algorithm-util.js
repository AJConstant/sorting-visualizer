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

const updateState = (updates, dispatch) => {
    if (!updates.length) {
        dispatch(setCompared([]));
        dispatch(setToSwap([]));
        dispatch(setPivot([]));
        dispatch(setRunning(false));
        return;
    }
    dispatch(updates.shift());
    setTimeout(() => {
        updateState(updates, dispatch)
    }, 5)
};

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
