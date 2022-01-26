import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./gasPrice/reducer";
import gasPriceReducer from "./gasPrice/reducer";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        gasPrice: gasPriceReducer,
    },
});
