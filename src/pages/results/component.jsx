import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import styles from "./styles.css";
import AreaGraph from "../../components/area-graph/component";
import BarGraph from "../../components/bar-graph/component";
import Title from "../../components/title/component";
import CommentBox from "../../components/comment-box/component";
import transformUtil from "../../utils/transform-data";
import { selectComments } from "../../reducers/comments-reducer";
import { useSelector } from "react-redux";

export const Results = () => {
  const comments = useSelector(selectComments);

  return (
    <div className={styles.container}>
      <Title title="COMMENTS AND TRENDS" />
      <div className={styles.wrapper}>
        <ul className={styles.commentWrapper}>
          {comments?.map((comment) => (
            <CommentBox key={comment.id} comment={comment} />
          ))}
        </ul>
        <div>
          <div className={styles.graphWrapper}>
            <AreaGraph
              chartData={transformUtil.getReadableDate(comments)}
              xAxisDataKey="commentDate"
              areaDataKey="rating"
            />
            <span className={styles.description}>User rating/day</span>
          </div>
          <div className={styles.graphWrapper}>
            <BarGraph
              chartData={transformUtil.getTransformChartData(comments)}
              xAxisDataKey="rating"
              barDataKey="count"
            />
            <span className={styles.description}>Rating Frequency</span>
          </div>
        </div>
      </div>
    </div>
  );
};

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
