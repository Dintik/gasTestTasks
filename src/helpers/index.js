import { getEthPriceUsd } from "../api/endpoints";

const { ethers } = require("ethers");

export const getGasPrice = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const feeData = await provider.getFeeData();
    const gasPrice = feeData.gasPrice;
    const gasPriceString = ethers.utils.formatUnits(gasPrice, 9);
    const gasPriceWei = Number(gasPriceString).toFixed(3);
    return gasPriceWei;
};

export const getEthRate = async () => {
    const ethPriceUsd = await getEthPriceUsd();
    if (ethPriceUsd && ethPriceUsd.ethereum.usd) {
        return ethPriceUsd.ethereum.usd;
    } else return "Sorry, an error occurred while receiving the rate ";
};
