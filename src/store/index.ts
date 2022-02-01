import { configureStore } from "@reduxjs/toolkit";
import pricesReducer from "./prices/reducer";

export const store = configureStore({
    reducer: {
        prices: pricesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch