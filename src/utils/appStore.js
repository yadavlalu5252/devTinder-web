import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice.js";
import feedReducer from "../utils/feedSlice.js"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
    }
});

export default appStore;