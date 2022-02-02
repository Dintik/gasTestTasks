import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GasStateTypes = {
    gasPrice: null | string,
    ethRate: null | string,
    isLoadingGas: boolean,
    isLoadingEth: boolean
};

const initialState: GasStateTypes = {
    gasPrice: null,
    ethRate: null,
    isLoadingGas: true,
    isLoadingEth: true
};

const priceSlice = createSlice({
    name: "price",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoadingGas = true;
            state.isLoadingEth = true;
        },
        setGasPrice: (state, action: PayloadAction<string>) => {
            state.gasPrice = action.payload;
            state.isLoadingGas = false;
        },
        setEthRate: (state, action: PayloadAction<string>) => {
            state.ethRate = action.payload;
            state.isLoadingEth = false;
        },
    },
});

export const { setGasPrice, setEthRate, setLoading } = priceSlice.actions;

export default priceSlice.reducer;
