import { setArray } from '../store/actions';
import updateState from './algorithms';

const merge = (arr1, arr2, startIdx, endIdx, updates, inPlaceObj) => {
    let merged = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            merged.push(arr1.shift());
        } else {
            merged.push(arr2.shift());
            inPlaceObj.array = inPlaceObj.array.slice(0, startIdx)
                .concat(merged).concat(arr1).concat(arr2)
                .concat(inPlaceObj.array.slice(endIdx + 1));
            updates.push(setArray(inPlaceObj.array.slice()));
        }
    }
    return merged.concat(arr1.slice().concat(arr2.slice()));
}

const mergeSort = (array, dispatch) => {
    let updates = [];
    mergeSortHelper(array, 0, array.length - 1, dispatch, updates, { array: array.slice() });
    updateState(updates, dispatch);
}

/**
 * Merge sort is NOT an in place sorting algorithm. 
 * This implementation attempts to visualize the action of 
 * merge sort on an array by applying intermediate steps of the sort to
 * the base array.
 * 
 * Note: the inPlace array is nested within an object in order to maintain proper
 * references to it throughout the call stack
 * @param {} array 
 * @param {} dispatch 
 */
const mergeSortHelper = (array, startIdx, endIdx, dispatch, updates, inPlaceObj) => {
    const len = array.length;
    if (len <= 1) return array;
    let mid = Math.floor(len / 2);
    let inPlaceIndex = Math.floor((startIdx + endIdx + 1) / 2);
    let left = mergeSortHelper(array.slice(0, mid), startIdx, inPlaceIndex - 1, dispatch, updates, inPlaceObj);
    let right = mergeSortHelper(array.slice(mid), inPlaceIndex, endIdx, dispatch, updates, inPlaceObj);
    return merge(left, right, startIdx, endIdx, updates, inPlaceObj);
}

export default mergeSort


