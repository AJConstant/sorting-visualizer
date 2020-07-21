import { connect } from 'react-redux';
import RunButton from './run-button';
import { setRunning, resetMetaData } from '../../../store/actions';
import  bubbleSort from '../../../algorithms/bubble-sort';
import mergeSort from '../../../algorithms/merge-sort';
import quickSort from '../../../algorithms/quick-sort';

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
            default:
                return;
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RunButton);