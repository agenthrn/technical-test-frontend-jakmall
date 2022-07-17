const DataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DATA":
      return { ...state, ...payload };
    case "SET_STEPPER":
      return { ...state, stepPosition: payload };
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
