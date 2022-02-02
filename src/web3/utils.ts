const { ethers } = require("ethers");

export const getGasPrice = async () => {
    try {
        const provider: any = new ethers.providers.Web3Provider(window.ethereum);
        const feeData: any = await provider.getFeeData();
        const gasPrice: any = feeData.gasPrice;
        const gasPriceString: string = ethers.utils.formatUnits(gasPrice, 9);
        const gasPriceWei: string = Number(gasPriceString).toFixed(3);
        return gasPriceWei;
    } catch (e: any) {
        return "Sorry, there was an error";
    }
};