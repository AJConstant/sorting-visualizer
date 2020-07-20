import { connect } from "react-redux";
import App from './app';
import { setArray } from '../store/actions';

const mapStateToProps = (state) => {
    return (state)
};
const mapDispatchToProps = () => dispatch => ({
    createArray: arraySize => {
        let array = [];
        while (array.length < arraySize) {
            array.push(Math.floor(Math.random() * 200) + 5);
        }
        dispatch(setArray(array));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);