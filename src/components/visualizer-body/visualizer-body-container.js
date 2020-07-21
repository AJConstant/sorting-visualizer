import { available_algorithms } from '../../algorithms/algorithms';
import { connect } from 'react-redux';
import VisualizerBody from './visualizer-body';

const mapStateToProps = state => {
    return {
        classes: state.classes,
        selectedAlgorithm: available_algorithms[state.settings.algorithmIndex],
        arraySize: state.settings.arraySize,
        array: state.arrayState.array,
        compared: state.arrayState.compared,
        toSwap: state.arrayState.toSwap,
        sorted: state.arrayState.sorted,
        pivot: state.arrayState.pivot
    }
}

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(VisualizerBody);