import { setArray, setCompared, setToSwap, setSorted } from '../store/actions';
import { updateState } from './algorithm-util';


const insertionSort = (array, dispatch) => {
    let trace = [];
    let sorted = [];
    let tempArray = array.slice(0);
    const len = tempArray.length;
    for(let i = 1; i < len; i++){
        let key = tempArray[i];
        let j = i-1;
        trace.push(setCompared([j, i]));
        while(j >= 0 && tempArray[j] > key){
            trace.push(setToSwap([j, j+1]))
            tempArray[j+1] = tempArray[j];
            j--;
            trace.push(setArray(tempArray.slice(0)));
            trace.push(setCompared([j, j+1]));
        }
        tempArray[j+1] = key;
        trace.push(setArray(tempArray.slice(0)));
        sorted.push(i-1);
        trace.push(setSorted(sorted.slice(0)));
    }
    sorted.push(len-1);
    trace.push(setSorted(sorted.slice(0)));
    updateState(trace, dispatch, array.length);
    return tempArray;
}



export default insertionSort;