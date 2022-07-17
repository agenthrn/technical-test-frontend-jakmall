import React, { useReducer } from "react";

// Bring the context
import DataContext from "./DataContext";

// Bring the reducer
import DataReducer from "./DataReducer";

const DataState = ({ children }) => {
  // Define our state, from localstorage
  const initialState = {
    stepPosition: 1,
    email: "",
    phoneNumber: "",
    address: "",
    isDropshipper: false,
    dropshipName: "",
    dropshipPhoneNumber: "",
  };

  // Dispatch the reducer
  const [state, dispatch] = useReducer(DataReducer, initialState);

  const setDelivery = (payload) => {
    if (!payload.isDropshipper) {
      payload.dropshipName = "";
      payload.dropshipPhoneNumber = "";
    }
    //set to localstorage here
    localStorage.setItem("deliveryData", JSON.stringify(payload));
    //dispatch
    dispatch({ type: "INSERT_DELIVERY", payload });
  };

  const setStepper = (payload) => {
    dispatch({ type: "SET_STEPPER", payload });
  };

  const getData = () => {
    //get from localstorage here
    const payload = JSON.parse(localStorage.getItem("deliveryData"));
    //dispatch
    dispatch({ type: "GET_DATA", payload });
  };

  return (
    <DataContext.Provider
      value={{
        ...state,
        setDelivery,
        setStepper,
        getData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataState;
