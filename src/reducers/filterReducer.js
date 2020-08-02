const initState = {
    parish: "st. catherine",
    minRent: 0,
    maxRent: null,
    minBedrooms: 0,
    maxBedrooms: null,
    minBathrooms: 0,
    maxBathrooms: null,
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
        case "SET_MAX_BEDROOMS_FILTER":
            return {
                ...state,
                maxBedrooms: action.payload.maxBedrooms
            }
        case "SET_MIN_BATHROOMS_FILTER":
            return {
                ...state,
                minBathrooms: action.payload.minBathrooms
            }
        case "SET_MAX_BATHROOMS_FILTER":
            return {
                ...state,
                maxBathrooms: action.payload.maxBathrooms
            }
        default: return state;
    }
};
export default filterReducer;