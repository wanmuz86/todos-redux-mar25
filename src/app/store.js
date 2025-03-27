import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todoSlice";
import loggerMiddleware from "../middleware/loggerMiddleware";

// The code to define store which will be used by the components
export const store = configureStore({
    // If you have multiple slices, it will be defined here
    reducer: {
        todos:todoSlice
    },

    // ANother configuration of the store, eg: to define middleware
    // Add logger middleware to the existing middleware
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
})