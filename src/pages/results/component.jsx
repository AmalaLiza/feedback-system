import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Results extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { comments = [] } = this.props;
		console.log("comments", comments);
		return (
			<div>
				<h1>Results</h1>
				{comments.map((comment) => (
					<div key={comment.email}>{comment.comments}</div>
				))}
			</div>
		);
	}
}
export default withRouter(Results);
