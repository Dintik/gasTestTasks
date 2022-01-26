import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "...",
    status: "idle",
};

export const gasPriceGet = createSlice({
    name: "gas",
    initialState,
    reducers: {
        setGasPrice: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setGasPrice } = gasPriceGet.actions;

export default gasPriceGet.reducer;
