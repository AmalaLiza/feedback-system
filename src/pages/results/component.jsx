import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./styles";
import Chart from "../../components/chart/component";
import Title from "../../components/title/component";
import CommentBox from "../../components/comment/component";

const Results = ({ comments = [] }) => (
	<div className={styles.container}>
		<Title title="COMMENTS AND TRENDS" />
		<div className={styles.wrapper}>
			<ul className={styles.commentWrapper}>
				{comments?.map((comment) => (
					<CommentBox key={comment.email} comment={comment} />
				))}
			</ul>
			<div className={styles.graphWrapper}>
				<Chart />
			</div>
		</div>
	</div>
);

export default withRouter(Results);
