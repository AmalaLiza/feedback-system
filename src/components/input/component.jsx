import React, { Component } from "react";
import classnames from "classnames";
import errorIcon from "../../images/close.svg";
import styles from "./styles.css";

class Input extends Component {
	state = { error: this.props.error, value: "", active: false };
	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.error !== prevState.error) {
			return { error: nextProps.error };
		} else return null;
	}

	onChange = (event) => {
		this.setState({ value: event.target.value });
		this.props.handleChange(event.target.value);
	};

	onFocus = () => {
		if (!this.state.value || !this.state.active) {
			this.setState({ active: !this.state.active });
		}
	};

	render() {
		const { label, type, placeHolder, classes = {} } = this.props;
		const { value, error, active } = this.state;
		return (
			<div
				className={classnames(classes.container, styles.container, {
					[styles.error]: !!error && !active,
				})}>
				<label
					htmlFor={label}
					className={classnames(
						{ [classes.active || styles.active]: !!active },
						styles.label
					)}>
					{label}
				</label>

				<input
					id={label}
					onFocus={this.onFocus}
					onBlur={this.onFocus}
					className={styles.input}
					type={type}
					placeholder={placeHolder}
					value={value}
					onChange={this.onChange}
				/>
				{!!error && !active && (
					<img
						className={styles.errorIcon}
						src={errorIcon}
						title="Please enter missing value."
					/>
				)}
			</div>
		);
	}
}
export default Input;
