import { connect } from "react-redux";
import TopBar from './top-bar';

const mapStateToProps = (state) => ({state});
const mapDispatchToProps = () => dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);