import { configureStore } from "@reduxjs/toolkit";
import pricesReducer from "./prices/reducer";

export const store = configureStore({
    reducer: {
        prices: pricesReducer,
    },
});