import { setCompared, setToSwap, setArray, setSorted, setTrace } from '../store/actions';
import { runPlayback } from './algorithm-playback';

const bubbleSort = (array, dispatch) => {
    const len = array.length;
    // This is a trace of the algorithm
    let trace = [];
    let sorted = [];
    let tempArray = array.slice(0);
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            trace.push(setCompared([j, j + 1]));
            if (tempArray[j] > tempArray[j + 1]) {
                trace.push(setToSwap([j, j + 1]));
                let temp = tempArray[j];
                tempArray[j] = tempArray[j + 1];
                tempArray[j + 1] = temp;
                trace.push(setArray(tempArray.slice(0)));
                trace.push(setToSwap([]));
            }
        }
        sorted.push(len-i-1);
        trace.push(setSorted(sorted.slice()));
    }
    sorted.push(0);
    trace.push(setSorted(sorted.slice()));
    dispatch(setTrace(trace.slice(0)));
    runPlayback(dispatch, array.length);
    return array;
}

export default bubbleSort;