import { ADD_SONG, REMOVE_SONG } from "../actionTypes/actionTypes";

const addSong = (songObject) => {
    return {
        type: ADD_SONG,
        payload: songObject 
    };
};

const removeSong = (key) => {
    return {
        type: REMOVE_SONG,
        key
    }
}

export { addSong, removeSong };