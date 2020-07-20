import { connect } from 'react-redux';
import ArraySizeSelect from './array-size-select';
import { setArray } from '../../../store/actions';

const mapStateToProps = state => {
    console.log(state);
    return{
        classes: state.classes,
        initialArraySize: state.settings.initialArraySize
    }
}

const mapDispatchToProps = dispatch => ({
    createArray: arraySize => {
        let array = [];
        while (array.length < arraySize) {
            array.push(Math.floor(Math.random() * 200) + 5);
        }
        dispatch(setArray(array));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ArraySizeSelect);