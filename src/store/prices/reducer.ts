import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GasStateTypes = {
    gasPrice: string,
    ethRate: string
};

const initialState: GasStateTypes = {
    gasPrice: "0",
    ethRate: "0"
};

const priceSlice = createSlice({
    name: "price",
    initialState,
    reducers: {
        setGasPrice: (state, action: PayloadAction<string>) => {
            state.gasPrice = action.payload;
        },
        setEthRate: (state, action: PayloadAction<string>) => {
            state.ethRate = action.payload;
        },
    },
});

export const { setGasPrice, setEthRate } = priceSlice.actions;

export default priceSlice.reducer;
