import { runPlayback } from './algorithm-playback';
import { setArray, setSorted, setToSwap, setTrace } from '../store/actions';


const heapify = (array, len, index, sorted, trace) => {
    let largest = index,
        left = 2*index + 1,
        right = 2*index + 2;

    if (left < len && array[largest] < array[left]) {
        largest = left;
    }

    if (right < len && array[largest] < array[right]) {
        largest = right;
    }

    if (largest !== index) {
        trace.push(setToSwap([index, largest]));
        let temp = array[index];
        array[index] = array[largest];
        array[largest] = temp;
        trace.push(setArray(array.slice(0)));
        heapify(array, len, largest, sorted, trace);
    }
}

const heapSort = (arrayState, dispatch) => {
    let array = arrayState.slice(0);
    const len = array.length;
    let sorted = [];
    let trace = [];
    // Build maxheap
    for(let i = Math.floor(len/2) - 1; i >= 0; i--){
        heapify(array, len, i, sorted, trace)
    }
    for(let i=len-1; i>0; i--){
        trace.push(setToSwap([0, i]));
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        sorted.push(i);
        trace.push(setArray(array.slice(0)));
        trace.push(setSorted(sorted.slice(0)));
        heapify(array, i, 0, sorted, trace);
    }
    sorted.push(0);
    trace.push(setSorted(sorted.slice(0)));
    dispatch(setTrace(trace.slice(0)));
    runPlayback(dispatch, array.length);
    return array;
}

export default heapSort;