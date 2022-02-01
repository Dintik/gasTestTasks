import { createSlice } from "@reduxjs/toolkit";

type CuratedGasStateTypes = {
    gasPrice: any;
    ethRate: any;
};

const initialState: CuratedGasStateTypes = {
    gasPrice: null,
    ethRate: null,
};

const priceSlice = createSlice({
    name: "price",
    initialState,
    reducers: {
        setGasPrice: (state, action) => {
            state.gasPrice = action.payload;
        },
        setEthRate: (state, action) => {
            state.ethRate = action.payload;
        },
    },
});

export const { setGasPrice } = priceSlice.actions;
export const { setEthRate } = priceSlice.actions;

export default priceSlice.reducer;
