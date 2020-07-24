import { connect } from 'react-redux';
import RunButton from './run-button';
import { setRunning, resetMetaData, setInPlayback } from '../../../store/actions';
import  bubbleSort from '../../../algorithms/bubble-sort';
import mergeSort from '../../../algorithms/merge-sort';
import quickSort from '../../../algorithms/quick-sort';
import insertionSort from '../../../algorithms/insertion_sort';
import heapSort from '../../../algorithms/heap_sort';
import { runPlayback } from '../../../algorithms/algorithm-playback';

const mapStateToProps = state => {
    return{
        classes: state.classes,
        selectedIndex: state.settings.algorithmIndex,
        running: state.arrayState.running,
        array: state.arrayState.array,
        inPlayback: state.arrayState.inPlayback
    }
}

const mapDispatchToProps = dispatch => ({
    beginSort: (algorithmIndex, array) => {
        dispatch(resetMetaData());
        // The reason to call this before we are truly in playback
        // is to prevent superclickers from doing something
        // we don't want :^)
        dispatch(setInPlayback(true));
        dispatch(setRunning(true));
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
    },
    resumePlayback: (arraySize) => {
        dispatch(setRunning(true));
        runPlayback(dispatch, arraySize);
        return;
    },
    pausePlayback: () => {
        dispatch(setRunning(false));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RunButton);