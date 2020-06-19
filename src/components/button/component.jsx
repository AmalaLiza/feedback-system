import React, { Component } from "react";
import styles from "./styles.js";

class Button extends Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.props.handleClick();
	}

	render() {
		const { buttonText } = this.props;
		return <button onClick={this.handleClick}> {buttonText}</button>;
	}
}
export default Button;
