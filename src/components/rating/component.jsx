import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./styles.css";
import Rating from "react-rating";

/**
 * StarRating component
 * Props are className, onRatingClick, initialRating, label
 */
const StarRating = ({ className, onRatingClick, initialRating = 0, label }) => (
	<>
		<label className={styles.label}>{label}</label>
		<Rating
			initialRating={initialRating}
			onClick={onRatingClick}
			className={classnames(styles.star, className)}
			emptySymbol="fa fa-star-o fa-2x"
			fullSymbol="fa fa-star fa-2x"
		/>
	</>
);

StarRating.propTypes = {
	/**
	 * onRatingClick: Function to handle click
	 */
	onRatingClick: PropTypes.func.isRequired,
	/**
	 * label: text to be rendered as label for rating component
	 */
	label: PropTypes.string,
	/**
	 * className: additional classes to be applied on rating component
	 */
	className: PropTypes.string,
	/**
	 * initialRating: Default rating value
	 */
	initialRating: PropTypes.number,
};

export default StarRating;
