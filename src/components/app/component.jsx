import React, { Component } from "react";
import styles from "./styles.js";
import Input from "../input/component.jsx";
import Button from "../button/component.jsx";
import Rating from "react-rating";

class App extends Component {
	render() {
		return (
			<div style={styles.container}>
				<h1>Feedback system</h1>
				<Input type="input" label="Name" />
				<Input type="email" label="Email" />
				<Button buttonText="buttonText" />
				<Rating
					style={styles.star}
					emptySymbol="fa fa-star-o fa-2x"
					fullSymbol="fa fa-star fa-2x"
				/>
			</div>
		);
	}
}
export default App;
