import React from "react";
import classnames from "classnames";
import styles from "./styles.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Button component
 * Props are onClick, buttonText, className
 */
const Button = ({ onClick, buttonText, className }) => (
  <Link
    to={`/results`}
    className={classnames(styles.button, className)}
    onClick={onClick}
  >
    <span>{buttonText}</span>
  </Link>
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
