import React from "react";
import classnames from "classnames";
import styles from "./styles.css";

const Button = ({ handleClick, buttonText, className }) => (
	<button
		className={classnames(styles.button, className)}
		onClick={handleClick}>
		{buttonText}
	</button>
);

export default Button;
