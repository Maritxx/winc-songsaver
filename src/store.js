import { createStore } from "redux";
import { songListReducer } from "./reducers/songListReducer";

const store = createStore(songListReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;