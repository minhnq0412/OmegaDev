import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data = [] }) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Bar className="max-h-[70%]" data={data} options={options} />;
};

export default BarChart;
