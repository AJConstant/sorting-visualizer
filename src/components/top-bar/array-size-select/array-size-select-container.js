import { connect } from 'react-redux';
import ArraySizeSelect from './array-size-select';
import { createArray } from '../../../algorithms/algorithm-util';
import { setArraySize } from '../../../store/actions';

const mapStateToProps = state => {
    return{
        classes: state.classes,
        running: state.arrayState.running,
        arraySize: state.settings.arraySize
    }
}

const mapDispatchToProps = dispatch => ({
    setSize: (arraySize) => dispatch(setArraySize(arraySize)),
    createArray: (arraySize) => createArray(arraySize, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ArraySizeSelect);