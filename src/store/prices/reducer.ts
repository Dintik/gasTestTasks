import { createSlice } from "@reduxjs/toolkit";

type GasStateTypes = {
    gasPrice: any;
    ethRate: any;
};

const initialState: GasStateTypes = {
    gasPrice: "0",
    ethRate: "0",
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
