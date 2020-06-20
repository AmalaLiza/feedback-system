import { connect } from "react-redux";
import Results from "./component";

/**
 * mapStateToProps to map redux state as props
 * comments from redux state is send to Results component as props.
 * @param {object} state
 */
const mapStateToProps = (state) => ({
	comments: state.comments,
});

/**
 * Results container
 * Results component is connected here to access comments state from store
 */
export default connect(mapStateToProps)(Results);
