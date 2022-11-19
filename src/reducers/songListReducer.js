import { ADD_SONG, REMOVE_SONG } from "../actionTypes/actionTypes";

const initialState = {
    songs: []
};

export const songListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SONG:
            const newSongObject = {...action.payload, songId: state.songs.length + 1}
            return {
                ...state,
                songs: [...state.songs, newSongObject]
            };

        case REMOVE_SONG:
            const filteredArray = state.songs.filter((song) => {
                return song.songId !== action.payload
            })
            return {
                ...state,
                songs: filteredArray
            };

        default:
            return state;
    }
}