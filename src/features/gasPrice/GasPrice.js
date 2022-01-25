import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGasPrice, setGasPrice } from "./gasPriceGet";

export function GasPrice() {
    const { ethers } = require("ethers");
    const gasPrice = useSelector(selectGasPrice);
    const dispatch = useDispatch();

    const [gasPriceUsd, setGasPriceUsd] = useState("...");

    const getGasPrice = useCallback(async function () {
        dispatch(setGasPrice("..."));
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const feeData = await provider.getFeeData();
        const gasPrice = feeData.gasPrice;
        const gasPriceString = ethers.utils.formatUnits(gasPrice, 9);
        const gasPriceWei = Number(gasPriceString).toFixed(3);
        dispatch(setGasPrice(gasPriceWei));

        // fetch("https://api.coinbase.com/v2/prices/ETH-USD/buy")
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((data) => {
        //         console.log(data);
        //     });

        fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setGasPriceUsd(data?.ethereum?.usd);
            });
    }, []);

    useEffect(() => {
        getGasPrice();
    }, []);

    return (
        <div className="App-header-wrap">
            <div>
                <p className="App-header-text">Gas price: {gasPrice} gwei</p>
                <p className="App-header-text">Exchange rate: {gasPriceUsd}$</p>
            </div>
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
