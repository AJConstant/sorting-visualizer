import { connect } from 'react-redux';
import RunButton from './run-button';
import { setRunning, resetMetaData } from '../../../store/actions';
import  bubbleSort from '../../../algorithms/bubble-sort';
import mergeSort from '../../../algorithms/merge-sort';
import quickSort from '../../../algorithms/quick-sort';
import insertionSort from '../../../algorithms/insertion_sort';
import heapSort from '../../../algorithms/heap_sort';

const mapStateToProps = state => {
    return{
        classes: state.classes,
        selectedIndex: state.settings.algorithmIndex,
        running: state.arrayState.running,
        array: state.arrayState.array
    }
}

const mapDispatchToProps = dispatch => ({
    beginSort: (algorithmIndex, array) => {
        dispatch(setRunning(true));
        dispatch(resetMetaData());
        switch(algorithmIndex){
            case 0:
                bubbleSort(array, dispatch);
                return;
            case 1:
                mergeSort(array, dispatch);
                return;
            case 2:
                quickSort(array, dispatch);
                return;
            case 3:
                insertionSort(array, dispatch);
                return;
            case 4:
                heapSort(array, dispatch);
                return;
            default:
                return;
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RunButton);