import React, { Component } from "react";
import styles from "./styles.js";

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		console.log("on click");
	}

	render() {
		const { buttonText } = this.props;
		return <button onChange={this.handleClick}> {buttonText}</button>;
	}
}
export default Button;
