import { setArray, setPivot, setToSwap, setSorted } from '../store/actions';
import { updateState } from './algorithm-util';

const partition = (array, startIdx, endIdx, updates, sorted) => {
    let i = startIdx - 1;
    let j = endIdx + 1;
    let pivot = startIdx;
    updates.push(setPivot([pivot]));
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
            updates.push(setSorted(sorted.slice(0)));
            return j;
        }
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        updates.push(setToSwap([i, j]));
        updates.push(setArray(array.slice(0)));
    }
}

const quickSortHelper = (array, startIdx, endIdx, updates, sorted) => {
    if (startIdx >= endIdx){
        return;
    }
    let part = partition(array, startIdx, endIdx, updates, sorted);
    quickSortHelper(array, startIdx, part, updates, sorted);
    quickSortHelper(array, part + 1, endIdx, updates, sorted);
}

const quickSort = (array, dispatch) => {
    let updates = [];
    let sorted = [];
    let tempArray = array.slice(0);
    quickSortHelper(tempArray, 0, tempArray.length - 1, updates, sorted);
    sorted.push(array.length-1);
    updates.push(setSorted(sorted.slice(0)));
    updateState(updates, dispatch);
}

export default quickSort;