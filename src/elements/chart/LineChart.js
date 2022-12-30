import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = ({ data }) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Line className="max-h-[70%]" data={data} options={options} />;
};

export default LineChart;
