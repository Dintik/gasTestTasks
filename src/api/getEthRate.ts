import { fetchApiGetEthRate } from "./fetchApiGetEthRate";

export const getEthRate = async () => {
    const resp = await fetchApiGetEthRate();
    
    if (!resp.isError && resp?.data?.ethereum?.usd) {
        const ethRate = resp.data.ethereum.usd;
        return (ethRate).toString();
    }
    else {
        return "Sorry, there was an error";
    }
};
