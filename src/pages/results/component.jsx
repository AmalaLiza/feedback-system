import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import styles from "./styles";
import Chart from "../../components/chart/component";
import Title from "../../components/title/component";
import CommentBox from "../../components/comment-box/component";

/**
 * Results component to render comments
 * CommentBox is used to render each comment.
 * @param {*} comments
 */
const Results = ({ comments = [] }) => (
	<div className={styles.container}>
		<Title title="COMMENTS AND TRENDS" />
		<div className={styles.wrapper}>
			<ul className={styles.commentWrapper}>
				{comments?.map((comment) => (
					<CommentBox key={comment.id} comment={comment} />
				))}
			</ul>
			<div className={styles.graphWrapper}>
				<Chart />
			</div>
		</div>
	</div>
);

Results.propTypes = {
	/**
	 * comments: comments to be rendered in results page
	 */
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			email: PropTypes.string,
			name: PropTypes.string,
			comment: PropTypes.string,
			rating: PropTypes.number,
			commentDate: PropTypes.number,
		})
	),
};
export default withRouter(Results);
