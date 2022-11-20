import { nanoid } from "nanoid";
import { ADD_SONG, REMOVE_SONG } from "../actionTypes/actionTypes";

const initialState = [];

export const songListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SONG:
            const newSongObject = {...action.payload, songId: nanoid(10)}
            return [...state, newSongObject]

        case REMOVE_SONG:
            const filteredArray = state.filter((song) => {
                return song.songId !== action.payload
            })
            return [...filteredArray];

        default:
            return state;
    }
}