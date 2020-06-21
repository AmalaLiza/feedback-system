import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from "recharts";
import styles from "./styles.css";

/**
 * CustomTooltip component for charts.
 */
const CustomTooltip = ({ payload = {}, xAxisDataKey, areaDataKey, active }) => {
	if (active) {
		return (
			<>
				<p className={styles.label}>
					{`${xAxisDataKey}: ${payload[0]?.payload?.[xAxisDataKey]}`}
				</p>
				<p className={styles.label}>
					{`${areaDataKey}: ${payload[0]?.payload?.[areaDataKey]}`}
				</p>
			</>
		);
	}
	return null;
};

/**
 * Chart component
 * Props are chartData, xAxisDataKey, areaDataKey
 */
const Chart = ({ chartData, xAxisDataKey, areaDataKey }) => (
	<AreaChart
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
				<CustomTooltip areaDataKey={areaDataKey} xAxisDataKey={xAxisDataKey} />
			}
		/>
		<Area
			fillOpacity={0.8}
			type="monotone"
			dataKey={areaDataKey}
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
	</AreaChart>
);

Chart.propTypes = {
	/**
	 * chartData: Data to be rendered in chart.
	 */
	chartData: PropTypes.array.isRequired,
	/**
	 * xAxisDataKey: dataKey to be plotted on x-axis.
	 */
	xAxisDataKey: PropTypes.string.isRequired,
	/**
	 * areaDataKey: dataKey to be plotted as area.
	 */
	areaDataKey: PropTypes.string.isRequired,
};

export default Chart;
