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

/**
 * Chart component
 * Props are
 */

export default class Chart extends PureComponent {
	render() {
		const { chartData } = this.props;
		return (
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
				<XAxis dataKey="commentDate" />
				<YAxis ticks={[0, 1, 2, 3, 4, 5]} domain={[0, 5]} />
				<Tooltip />
				<Area
					fillOpacity={0.8}
					type="monotone"
					dataKey="rating"
					stroke="#8884d8"
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
	}
}

Chart.propTypes = {};
