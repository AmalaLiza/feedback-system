import React from "react";
import classnames from "classnames";
import styles from "./styles.css";
import PropTypes from "prop-types";

/**
 * Button component
 * Props are onClick, buttonText, className
 */
const Button = ({ onClick, buttonText, className }) => (
	<button className={classnames(styles.button, className)} onClick={onClick}>
		{buttonText}
	</button>
);

Button.propTypes = {
	/**
	 * onClick: Function to handle click
	 */
	onClick: PropTypes.func.isRequired,
	/**
	 * buttonText: text to be rendered inside button
	 */
	buttonText: PropTypes.string.isRequired,
	/**
	 * className: additional styles to be applied on button
	 */
	className: PropTypes.string,
};

export default Button;
