import { createStore } from "@reduxjs/toolkit";
import allReducer from "./reducer/index.reducer";

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;