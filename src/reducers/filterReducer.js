const initState = {
    parish: "st. catherine",
    minRent: 0,
    maxRent: null,
    minBedrooms: 0
};

const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_PARISH_FILTER":
            return {
                ...state,
                parish: action.payload.parish,
            };
        case "SET_MIN_RENT_FILTER":
            return {
                ...state,
                minRent: action.payload.minRent
            }
        case "SET_MAX_RENT_FILTER":
            return {
                ...state,
                maxRent: action.payload.maxRent
            }
        case "SET_MIN_BEDROOMS_FILTER":
            return {
                ...state,
                minBedrooms: action.payload.minBedrooms
            }
        default: return state;
    }
};
export default filterReducer;