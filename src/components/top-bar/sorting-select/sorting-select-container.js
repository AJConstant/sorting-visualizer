import available_algorithms from '../../../algorithms/algorithms';
import { connect } from 'react-redux';
import SortingSelect from './sorting-select';
import { setAlgorithm } from '../../../store/actions';

const mapStateToProps = state => {
    console.log(state);
    return{
        classes: state.classes,
        selectedAlgorithm: available_algorithms[state.algorithmReducer.algorithmIndex],
    }
}

const mapDispatchToProps = dispatch => ({
    setAlgorithm: index => dispatch(setAlgorithm(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SortingSelect);