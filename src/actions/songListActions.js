import { ADD_SONG, REMOVE_SONG } from "../actionTypes/actionTypes";

const addSong = (data) => {
    return {
        type: ADD_SONG,
        data
    };
};

const removeSong = (key) => {
    return {
        type: REMOVE_SONG,
        key
    }
}

export { addSong, removeSong };