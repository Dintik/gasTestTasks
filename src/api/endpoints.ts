export const getEthPriceUsd = async () => {
    try {
        const resp = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    
        if (resp.ok) {
            const data = await resp.json();
            const dataPrice = data.ethereum.usd;
            return {
                isError: false,
                dataPrice
            };
        } else {
            const error = await resp.json();
            return {
                isError: true,
                error
            };
        }
    } catch (e: any) {
        return { isError: true, error: e.message };
    }
};
