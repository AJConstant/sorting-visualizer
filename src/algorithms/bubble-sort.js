import { setCompared, setToSwap, setArray, setSorted, resetMetaData } from '../store/actions';
import updateState from '../algorithms/algorithms';

const bubbleSort = async (array, dispatch) => {
    const len = array.length;
    // This is a trace of the algorithm
    let updates = [];
    let sorted = [];
    let tempArray = array.slice(0);
    updates.push(resetMetaData());
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            updates.push(setCompared([j, j + 1]));
            if (tempArray[j] > tempArray[j + 1]) {
                updates.push(setToSwap([j, j + 1]));
                let temp = tempArray[j];
                tempArray[j] = tempArray[j + 1];
                tempArray[j + 1] = temp;
            }
            updates.push(setArray(tempArray.slice(0)));
            updates.push(setToSwap([]));
        }
        sorted.push(len-i-1);
        updates.push(setSorted(sorted.slice()));
    }
    sorted.push(0);
    updates.push(setSorted(sorted.slice()));
    updateState(updates, dispatch);
    return array;
}

export default bubbleSort;