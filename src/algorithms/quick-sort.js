import { setArray, setPivot, setToSwap, setSorted, setTrace } from '../store/actions';
import { runPlayback } from './algorithm-playback';

const partition = (array, startIdx, endIdx, trace, sorted) => {
    let i = startIdx - 1;
    let j = endIdx + 1;
    let pivot = startIdx;
    trace.push(setPivot([pivot]));
    while (true) {
        i++;
        while (array[i] < array[pivot]){
            i++;
        }
        j--;
        while (array[j] > array[pivot]){
            j--;
        }
        if (i >= j) {
            sorted.push(j);
            trace.push(setSorted(sorted.slice(0)));
            return j;
        }
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        trace.push(setToSwap([i, j]));
        trace.push(setArray(array.slice(0)));
    }
}

const quickSortHelper = (array, startIdx, endIdx, trace, sorted) => {
    if (startIdx >= endIdx){
        return;
    }
    let part = partition(array, startIdx, endIdx, trace, sorted);
    quickSortHelper(array, startIdx, part, trace, sorted);
    quickSortHelper(array, part + 1, endIdx, trace, sorted);
}

const quickSort = (array, dispatch) => {
    let trace = [];
    let sorted = [];
    let tempArray = array.slice(0);
    quickSortHelper(tempArray, 0, tempArray.length - 1, trace, sorted);
    sorted.push(array.length-1);
    trace.push(setSorted(sorted.slice(0)));
    dispatch(setTrace(trace.slice(0)));
    runPlayback(dispatch, array.length);
}

export default quickSort;