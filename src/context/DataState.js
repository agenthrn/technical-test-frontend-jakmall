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
    shipmentCost: 0,
    shipmentName: "",
    shipmentDuration: "",
    paymentName: "",
    productCost: 500000
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
    //get from localstorage here
    const data = JSON.parse(localStorage.getItem("deliveryData"));
    data["stepPosition"] = payload;
    //set to localstorage here
    localStorage.setItem("deliveryData", JSON.stringify(data));
    //dispatch
    dispatch({ type: "SET_STEPPER", payload });
  };

  const setShipment = ({ ...payload }) => {
    //get from localstorage here
    const data = JSON.parse(localStorage.getItem("deliveryData"));
    data["shipmentName"] = payload.shipmentName;
    data["shipmentCost"] = payload.shipmentCost;
    data["shipmentDuration"] = payload.shipmentDuration;
    //set to localstorage here
    localStorage.setItem("deliveryData", JSON.stringify(data));
    //dispatch
    dispatch({ type: "SET_SHIPMENT", payload });
  };

  const setPayment = (payload) => {
    //get from localstorage here
    const data = JSON.parse(localStorage.getItem("deliveryData"));
    data["paymentName"] = payload;
    //set to localstorage here
    localStorage.setItem("deliveryData", JSON.stringify(data));
    //dispatch
    dispatch({ type: "SET_PAYMENT", payload });
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
        setShipment,
        setPayment,
        getData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataState;