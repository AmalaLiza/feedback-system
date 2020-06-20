import { connect } from "react-redux";
import Results from "./component";

const mapStateToProps = (state) => ({
	comments: state.comments,
});
export default connect(mapStateToProps)(Results);
