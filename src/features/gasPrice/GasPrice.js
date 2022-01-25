import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGasPrice, setGasPrice } from "./gasPriceGet";

export function GasPrice() {
    const { ethers } = require("ethers");
    const gasPrice = useSelector(selectGasPrice);
    const dispatch = useDispatch();

    const getGasPrice = useCallback(async function () {
        dispatch(setGasPrice("..."));
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const feeData = await provider.getFeeData();
        const gasPrice = feeData.gasPrice;
        const gasPriceString = ethers.utils.formatUnits(gasPrice, 9);
        const gasPriceWei = Number(gasPriceString).toFixed(3);
        dispatch(setGasPrice(gasPriceWei));
    }, []);

    useEffect(() => {
        getGasPrice();
    }, []);

    return (
        <div>
            <p className="App-header-text">gas - {gasPrice} wei</p>
            <button
                className="App-header-btn"
                type="button"
                onClick={getGasPrice}
            >
                Refresh
            </button>
        </div>
    );
}
