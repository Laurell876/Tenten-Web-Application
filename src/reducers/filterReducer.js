const initState = {
    parish: "st. catherine",
  };
  
  const filterReducer = (state = initState, action) => {
    if (action.type == "SET_PARISH_FILTER") {
      return {
          ...state,
        parish: action.payload.parish,
      };
    }
    return state;
  };
  export default filterReducer;