import { SET_FILTER } from "../actionTypes/actionTypes";

const initialState = "";

export const songFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.payload

        default:
            return state  
    }
    
}