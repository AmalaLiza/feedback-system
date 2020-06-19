import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Results extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Results</h1>
			</div>
		);
	}
}
export default withRouter(Results);
