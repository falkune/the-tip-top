import React from "react";
import { Chart } from "react-google-charts";

export function Pie3d({title, data}) {
    const options = {
        title: title,
        is3D: true,
      };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width="100%"
      height="400px"
    />
  );
}
