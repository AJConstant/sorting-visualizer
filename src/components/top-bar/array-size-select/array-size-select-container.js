import { connect } from 'react-redux';
import ArraySizeSelect from './array-size-select';
import { setArray, resetMetaData } from '../../../store/actions';

const mapStateToProps = state => {
    return{
        classes: state.classes,
        initialArraySize: state.settings.initialArraySize,
        running: state.arrayState.running
    }
}

const mapDispatchToProps = dispatch => ({
    createArray: arraySize => {
        let array = [];
        while (array.length < arraySize) {
            array.push(Math.floor(Math.random() * 200) + 5);
        }
        dispatch(setArray(array));
        dispatch(resetMetaData());
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ArraySizeSelect);