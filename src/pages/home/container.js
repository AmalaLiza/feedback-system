import { connect } from "react-redux";
import Home from "./component";
import { CommentsStoreActions } from "../../actions/action-creator";

/**
 * mapDispatchToProps to dispatch actions
 * @param {*} dispatch
 */
const mapDispatchToProps = (dispatch) => {
	return {
		// dispatching actions returned by action creators
		onSubmitForm: (payload) =>
			dispatch(CommentsStoreActions.loadComments(payload)),
	};
};

/**
 * Home container
 * Home component is connected here to store to dispatch loadComments actions
 */
export default connect(null, mapDispatchToProps)(Home);
