import React from "react";
import { BarChart } from "../../elements/chart/index";
import { useAppContext } from "../../services/context/AppContext";

const Revenue = () => {
  const { state, dispatch } = useAppContext();
  return <BarChart data={state?.dashboard?.dataChart}></BarChart>;
};

export default Revenue;
