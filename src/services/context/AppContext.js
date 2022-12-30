import { createContext, useContext, useReducer } from "react";
import { dataChart } from "../../utils/data/ChartData";

const Reducer = (state, action) => {
  switch (action.type) {
    case "VIEW_USER": {
      return state;
    }
    case "SAVE_SETTING": {
      return { ...state, settings: action?.payload };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

const initialValue = {
  dashboard: { dataChart },
  settings: {},
  postmanagement: {},
};

const StateContext = createContext();
const DispatchContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialValue);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

const useAppContext = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  if (typeof dispatch === "undefined" || typeof state === "undefined")
    throw new Error("useAppContext must be used within AppProvider");
  return { state, dispatch };
};

export { useAppContext, AppProvider };
