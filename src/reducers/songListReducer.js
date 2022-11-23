import { nanoid } from "nanoid";
import { ADD_SONG, REMOVE_SONG } from "../actionTypes/actionTypes";

const initialState = {
    list: []
};

export const songListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SONG:
            const newSongObject = {...action.payload, songId: nanoid(10)}
            console.log("state " + state)

            return {
                    ...state,
                    list: [...state.list, newSongObject]
            };

        case REMOVE_SONG:
            const filteredArray = state.list.filter((song) => {
                return song.songId !== action.payload
            })
            return {
                    ...state,
                    list: [...filteredArray]
            };

        default:
            return state;
    }
}