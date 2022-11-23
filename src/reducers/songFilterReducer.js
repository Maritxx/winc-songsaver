import { SET_FILTER } from '../actionTypes/actionTypes';

const initialState = {
    selectedGenre: ""
};

export const songFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return Object.assign({}, state, {selectedGenre: action.payload})

        default:
            return state  
    }
    
}