export const getEthPriceUsd = async () => {
    const request = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    if (request.ok) {
        return await request.json();
    } else return false;
};
