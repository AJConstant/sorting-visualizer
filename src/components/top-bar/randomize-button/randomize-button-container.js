import { connect } from 'react-redux';
import { createArray } from '../../../algorithms/algorithm-util';
import randomizeButton from './randomize-button';

const mapStateToProps = state => {
    return{
        classes: state.classes,
        array: state.arrayState.array,
        running: state.arrayState.running
    }
}

const mapDispatchToProps = dispatch => ({
    randomizeArray: (length) => {
        createArray(length, dispatch);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(randomizeButton);