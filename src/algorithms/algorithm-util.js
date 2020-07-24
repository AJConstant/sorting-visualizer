import { 
    setArray,
    resetMetaData } from '../store/actions';

const available_algorithms = [
    'Bubble Sort',
    'Merge Sort',
    'Quick Sort',
    'Insertion Sort',
    'Heap Sort'
]

const array_sizes = [5, 10, 25, 50, 75, 100, 150];
const sorting_animation_delays = [500, 250, 100, 50, 25, 0, 0];

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
export { sorting_animation_delays };
export { createArray };
