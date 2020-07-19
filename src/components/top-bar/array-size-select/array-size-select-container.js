import { connect } from 'react-redux';
import ArraySizeSelect from './array-size-select';
import { setArraySize } from '../../../store/actions';

const mapStateToProps = state => {
    return{
        classes: state.classes,
        arraySize: state.topBarReducer.arraySize
    }
}

const mapDispatchToProps = dispatch => ({
    setArraySize: index => dispatch(setArraySize(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArraySizeSelect);