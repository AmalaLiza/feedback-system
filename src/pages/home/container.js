import { connect } from "react-redux";
import Home from "./component";
import { withRouter } from "react-router-dom";
import { CommentsStoreActions } from "../../actions/action-creator";

const mapStateToProps = (state) => state;

export const mapDispatchToProps = {
	mount: CommentsStoreActions.loadComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
