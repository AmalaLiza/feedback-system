import { connect } from "react-redux";
import App from "./component";

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(App);
