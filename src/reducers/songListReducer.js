import { ADD_SONG, REMOVE_SONG } from "../actionTypes/actionTypes";

const initialState = {
    songs: []
};

export const songListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SONG:
            return {

            };

        case REMOVE_SONG:
            return {

            };

        default:
            return state;
    }
}