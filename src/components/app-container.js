import { connect } from "react-redux";
import App from './app';

const mapStateToProps = (state) => ({state});
const mapDispatchToProps = () => dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);