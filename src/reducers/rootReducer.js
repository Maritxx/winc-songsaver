import { combineReducers } from "redux";

import { songListReducer } from "./songListReducer";
import { songFilterReducer } from "./songFilterReducer";

const rootReducer = combineReducers({
    songs: songListReducer,
    filter: songFilterReducer
});

export default rootReducer;