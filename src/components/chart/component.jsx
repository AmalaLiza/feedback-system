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

const data = [
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page B",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "Page E",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "Page F",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "Page G",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

export default class Chart extends PureComponent {
	render() {
		return (
			<AreaChart
				width={500}
				height={400}
				data={data}
				fillOpacity={1}
				margin={{
					top: 10,
					right: 30,
					left: 0,
					bottom: 0,
				}}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Area
					fillOpacity={0.8}
					type="monotone"
					dataKey="uv"
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
