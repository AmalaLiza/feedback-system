import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";

/**
 * Title component
 */
const Title = ({ title }) => <h1 className={styles.title}>{title}</h1>;

Title.propTypes = {
	/**
	 * title: text to be rendered as title
	 */
	title: PropTypes.string,
};
export default Title;
