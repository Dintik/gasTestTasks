import { getEthRateUsd } from "./fetchApiGetEthRate";

export const getEthRate = async () => {
    const resp = await getEthRateUsd();
    if (!resp.isError && resp.dataPrice) {
        return (resp.dataPrice).toString();
    }
    else {
        return "Sorry, an error occurred while receiving the rate ";
    }
};
