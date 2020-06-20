import { connect } from "react-redux";
import Home from "./component";
import { CommentsStoreActions } from "../../actions/action-creator";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
	return {
		// dispatching actions returned by action creators
		onSubmitForm: (payload) =>
			dispatch(CommentsStoreActions.loadComments(payload)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
