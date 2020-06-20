import React, { Component } from "react";
import styles from "./styles.css";

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
		this.props.handleChange(event.target.value);
	}

	render() {
		const { label, type, placeHolder } = this.props;
		return (
			<div className={styles.container}>
				<label className={styles.label}>{label}</label>

				<input
					className={styles.input}
					type={type}
					placeholder={placeHolder}
					value={this.state.value}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}
export default Input;
