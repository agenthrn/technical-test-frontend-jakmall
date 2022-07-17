const DataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DATA":
      return { ...state, ...payload };
    case "SET_STEPPER":
      return { ...state, stepPosition: payload };
    case "SET_SHIPMENT":
      return {
        ...state,
        shipmentCost: payload.shipmentCost,
        shipmentName: payload.shipmentName,
        shipmentDuration: payload.shipmentDuration,
      };
    case "SET_PAYMENT":
      return {
        ...state,
        paymentName: payload,
      };
    case "INSERT_DELIVERY":
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default DataReducer;
