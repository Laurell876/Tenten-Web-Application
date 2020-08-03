const initState = {
    parish: "st. catherine",
    rating: null,
    minRent: 0,
    maxRent: null,
    minBedrooms: 0,
    maxBedrooms: null,
    minBathrooms: 0,
    maxBathrooms: null,
    rentSort: -1, //0 is ascending, 1 is descending, -1 is the default ie no sorting
    bedroomSort: -1,
    bathroomSort: -1
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
        case "SET_RENT_SORT_FILTER":
            return {
                ...state,
                rentSort: action.payload.rentSort
            }
        case "SET_BEDROOM_SORT_FILTER":
            return {
                ...state,
                bedroomSort: action.payload.bedroomSort
            }
        case "SET_BATHROOM_SORT_FILTER":
            return {
                ...state,
                bathroomSort: action.payload.bathroomSort
            }
        case "SET_RATING_FILTER":
            return {
                ...state,
                rating: action.payload.rating
            }
        default: return state;
    }
};
export default filterReducer;