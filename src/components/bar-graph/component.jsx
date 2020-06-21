import React from "react";
import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import styles from "./styles.css";

/**
 * CustomTooltip component for charts.
 */
const CustomTooltip = ({ payload = {}, xAxisDataKey, barDataKey, active }) => {
	if (active) {
		return (
			<>
				<p className={styles.label}>
					{`${xAxisDataKey}: ${payload[0]?.payload?.[xAxisDataKey]}`}
				</p>
				<p className={styles.label}>
					{`${barDataKey}: ${payload[0]?.payload?.[barDataKey]}`}
				</p>
			</>
		);
	}
	return null;
};

/**
 * Chart component
 * Props are chartData, xAxisDataKey, barDataKey
 */
const BarGraph = ({ chartData, xAxisDataKey, barDataKey }) => (
	<BarChart
		width={500}
		height={400}
		data={chartData}
		fillOpacity={1}
		margin={{
			top: 10,
			right: 30,
			left: 0,
			bottom: 0,
		}}>
		<CartesianGrid strokeDasharray="3 3" />
		<XAxis dataKey={xAxisDataKey} />
		<YAxis ticks={[0, 1, 2, 3, 4, 5]} domain={[0, 5]} />
		<Tooltip
			content={
				<CustomTooltip barDataKey={barDataKey} xAxisDataKey={xAxisDataKey} />
			}
		/>
		<Bar
			fillOpacity={0.8}
			type="monotone"
			dataKey={barDataKey}
			stroke="#f15c41"
			fill="url(#colorUv)"
		/>
		<defs>
			<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
				<stop offset="5%" stopColor="#e052a0" stopOpacity={1} />
				<stop
					offset="95%"
					stopColor="#f15c41"
					stopOpacity={1}
					fillOpacity={1}
				/>
			</linearGradient>
		</defs>
	</BarChart>
);

BarGraph.propTypes = {
	/**
	 * chartData: Data to be rendered in chart.
	 */
	chartData: PropTypes.array.isRequired,
	/**
	 * xAxisDataKey: dataKey to be plotted on x-axis.
	 */
	xAxisDataKey: PropTypes.string.isRequired,
	/**
	 * barDataKey: dataKey to be plotted as bars.
	 */
	barDataKey: PropTypes.string.isRequired,
};

export default BarGraph;
