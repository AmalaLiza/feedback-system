import React, { Component } from "react";
import styles from "./styles.js";

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		const { label, type } = this.props;
		return (
			<>
				<label>{label}</label>
				<input
					type={type}
					value={this.state.value}
					onChange={this.handleChange}
				/>
			</>
		);
	}
}
export default Input;
