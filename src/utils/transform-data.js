/**
 * Function to get rating and count of ratings user entered
 * This is plot the graph, rating Vs count.
 * @param {object} comments
 */
const getTransformChartData = (comments) => {
	return Object.entries(
		comments.reduce((acc, curr) => {
			if (acc[curr.rating]) {
				acc[curr.rating] = acc[curr.rating] + 1;
			} else {
				acc[curr.rating] = 1;
			}
			return acc;
		}, {})
	).map((entry) => ({
		rating: entry?.[0].toString(),
		count: entry?.[1],
	}));
};

/**
 * Function to get readbale date and ratings
 * This is plot the graph, rating Vs date.
 * @param {object} comments
 */
const getReadableDate = (comments) => {
	return comments.map((comment) => ({
		commentDate: new Date(comment.commentDate).toDateString(),
		rating: comment.rating,
	}));
};

export default {
	getTransformChartData,
	getReadableDate,
};
