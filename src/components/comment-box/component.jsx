import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";
import star from "../../images/star.svg";

/**
 * CommentBox component
 * Props are comment object
 */
const CommentBox = ({ comment }) => (
	<li className={styles.commentSection}>
		<header className={styles.header}>
			<div className={styles.avatar}>{comment.name[0]}</div>
			<span className={styles.name}>{comment.name}</span>
			<div className={styles.metadata}>
				<div className={styles.commentDate}>
					{new Date(comment.commentDate).toDateString()}
				</div>
				<div className={styles.commentDate}>
					<img className={styles.star} src={star} />
					{comment.rating}
				</div>
			</div>
		</header>
		<div className={styles.commentContent}>
			<p className={styles.email}>
				<span className={styles.emailLabel}>E-mail </span>
				<span>{comment.email}</span>
			</p>
			<p>{comment.comment}</p>
		</div>
	</li>
);

CommentBox.propTypes = {
	/**
	 * comment: comment object to be rendered.
	 */
	comment: PropTypes.shape({
		email: PropTypes.string,
		name: PropTypes.string,
		comment: PropTypes.string,
		rating: PropTypes.number,
		commentDate: PropTypes.number,
	}).isRequired,
};

export default CommentBox;
