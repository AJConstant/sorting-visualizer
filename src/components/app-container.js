import { connect } from "react-redux";
import App from './app';
import { createArray } from "../algorithms/algorithm-util";

const mapStateToProps = (state) => {
    return{
        arraySize: state.settings.arraySize,
        darkMode: state.settings.darkMode
    }
};
const mapDispatchToProps = () => dispatch => ({
    createArray: arraySize => createArray(arraySize, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);