import React from "react";
import { LineChart } from "../../elements/chart/index";
import { useAppContext } from "../../services/context/AppContext";

const Subcription = () => {
  const { state, dispatch } = useAppContext();
  return <LineChart data={state?.dashboard?.dataChart}></LineChart>;
};

export default Subcription;
