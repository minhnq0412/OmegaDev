import React from "react";
import BarChart from "../../elements/BarChart";
import { dataLineChart } from "../../utils/data/ChartData";

const Revenue = () => {
  return <BarChart data={dataLineChart}></BarChart>;
};

export default Revenue;
