import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import errorIcon from "../../images/close.svg";
import styles from "./styles.css";

/**
 * Input component
 * Props are error, label, type, placeHolder, handleChange, classes
 */
class Input extends Component {
	/**
	 * States for Input
	 * error, value (input value), active (if input is active then true)
	 */
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

	/**
	 * onFocus: setting active state for label floating.
	 */
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

Input.propTypes = {
	/**
	 * error: Error validation to show error in input
	 */
	error: PropTypes.bool,
	/**
	 * type: type of input
	 */
	type: PropTypes.string,
	/**
	 * handleChange: Function to handle click
	 */
	handleChange: PropTypes.func.isRequired,
	/**
	 * label: text to be rendered as label for input
	 */
	label: PropTypes.string.isRequired,
	/**
	 * classes: additional classes to be applied on input
	 */
	classes: PropTypes.shape({
		active: PropTypes.string,
		container: PropTypes.string,
	}),
	/**
	 * placeHolder: Placeholdeer for input
	 */
	placeHolder: PropTypes.string,
};

export default Input;
