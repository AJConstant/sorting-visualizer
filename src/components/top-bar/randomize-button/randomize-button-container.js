import { connect } from 'react-redux';
import { createArray } from '../../../algorithms/algorithm-util';
import randomizeButton from './randomize-button';
import { resetMetaData, setInPlayback, setTrace, setRunning } from '../../../store/actions';

const mapStateToProps = state => {
    return{
        classes: state.classes,
        array: state.arrayState.array,
        running: state.arrayState.running,
        inPlayback: state.arrayState.inPlayback,
    }
}

const mapDispatchToProps = dispatch => ({
    randomizeArray: (length) => {
        createArray(length, dispatch);
    },
    reset: length => {
        dispatch(setTrace([]));
        dispatch(setRunning(false));
        dispatch(setInPlayback(false));
        dispatch(resetMetaData());
        createArray(length, dispatch);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(randomizeButton);