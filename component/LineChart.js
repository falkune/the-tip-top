import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
  
// class CustomizedLabel extends PureComponent {
//   render() {
//     const { x, y, stroke, value } = this.props;

//     return (
//       <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
//         {value}
//       </text>
//     );
//   }
// }

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
          {payload.value}
        </text>
      </g>
    );
  }
}

export default function Exemple({data, width}) {
    console.log(data)
    return (
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          width={width}
          height={700}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="_id" height={70} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="nomberOfRegitration" stroke="#82ca9d" />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    );
}
