import { connect } from "react-redux";
import Results from "./component";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(withRouter(Results));
