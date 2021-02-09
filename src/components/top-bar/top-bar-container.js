import { connect } from "react-redux";
import TopBar from './top-bar';
import { toggleDarkMode } from '../../store/actions'

const mapStateToProps = (state) => {
    return{
        classes: state.classes,
        darkMode: state.settings.darkMode
    }
}

const mapDispatchToProps = () => dispatch => ({
    toggleDarkMode: () => dispatch(toggleDarkMode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);