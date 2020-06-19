import React, { Component } from "react";
import styles from "./styles.js";
import Button from "../../components/button/component";
import Input from "../../components/input/component";
import { useHistory, withRouter } from "react-router-dom";
import StarRating from "../../components/rating/component";

function HomeButton() {
	let history = useHistory();

	function onSubmit() {
		history.push("/results");
	}

	return <Button buttonText="buttonText" handleClick={onSubmit} />;
}

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={styles.container}>
				<h1>Feedback system</h1>
				<Input type="input" label="Name" />
				<Input type="email" label="Email" />
				<HomeButton />
				<StarRating />
			</div>
		);
	}
}
export default withRouter(Home);
