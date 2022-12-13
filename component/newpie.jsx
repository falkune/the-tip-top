import React from "react";
import { Chart } from "react-google-charts";


export function NewPie({title, data}) {
    const options = {
        title: title,
        pieHole: 0.4,
        is3D: false,
    };

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}