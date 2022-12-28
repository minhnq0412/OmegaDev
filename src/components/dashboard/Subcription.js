import React from "react";
import LineChart from "../../elements/LineChart";
import { dataLineChart } from "../../utils/data/ChartData";

const Subcription = () => {
  return <LineChart data={dataLineChart}></LineChart>;
};

export default Subcription;
