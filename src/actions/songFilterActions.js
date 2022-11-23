import { SET_FILTER } from "../actionTypes/actionTypes";

const setFilter = (genre) => {
    return {
        type: SET_FILTER,
        payload: genre, 
    };
};

export { setFilter };