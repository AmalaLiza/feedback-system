import React from "react";
import classnames from "classnames";
import styles from "./styles.css";
import Rating from "react-rating";

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

export default StarRating;
