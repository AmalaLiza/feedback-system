import React, { Component } from "react";
import styles from "./styles.css";
import Rating from "react-rating";

class StarRating extends Component {
	render() {
		return (
			<Rating
				className={styles.star}
				emptySymbol="fa fa-star-o fa-2x"
				fullSymbol="fa fa-star fa-2x"
			/>
		);
	}
}
export default StarRating;
