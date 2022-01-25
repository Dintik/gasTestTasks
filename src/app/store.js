import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import gasPriceReducer from "../features/gasPrice/gasPriceGet";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        gasPrice: gasPriceReducer,
    },
});
