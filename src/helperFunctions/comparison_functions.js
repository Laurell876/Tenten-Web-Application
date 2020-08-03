
export const compareRent = (a, b) => { // sort in ascending order
    if (a.rent < b.rent) {
        return -1;
    }
    if (a.rent > b.rent) {
        return 1;
    }
    return 0;
}

export const compareBedrooms = (a, b) => { // sort in ascending order
    if (a.bedrooms < b.bedrooms) {
        return -1;
    }
    if (a.bedrooms > b.bedrooms) {
        return 1;
    }
    return 0;
}

export const compareBathrooms = (a, b) => { // sort in ascending order
    if (a.bathrooms < b.bathrooms) {
        return -1;
    }
    if (a.bathrooms > b.bathrooms) {
        return 1;
    }
    return 0;
}