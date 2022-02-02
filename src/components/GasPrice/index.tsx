import React, { useEffect, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setGasPrice, setEthRate, setLoading } from "../../store/prices/reducer";
import styles from "./styles.module.scss";
import { getEthRate } from "../../api/getEthRate";
import { getGasPrice } from "../../web3/utils";
import { IPrice } from "./interfaces";

const GasPrice: React.FC = () => {
    const price: IPrice = useAppSelector((state) => state.pricesState);
    const dispatch = useAppDispatch();

    const refreshData = useCallback(async function () {
        dispatch(setLoading());
        const curentprice: IPrice = {
            gasPrice: await getGasPrice(),
            ethRate: await getEthRate()
        };
        curentprice.gasPrice && dispatch(setGasPrice(curentprice.gasPrice));
        curentprice.ethRate && dispatch(setEthRate(curentprice.ethRate));
    }, []);

    useEffect(() => {
        refreshData();
    }, []);

    return (
        <section className={styles.gasPrice}>
            <button className={styles.gasPrice__btn} type="button" onClick={refreshData}>
                Refresh
            </button>
            <div className={styles.gasPrice__text__wrap}>
                <p className={styles.gasPrice__text}>Gas price: {price.isLoadingEth ? "Loading..." : `${price.gasPrice} gwei`}</p>
                <p className={styles.gasPrice__text}>Exchange rate: {price.isLoadingGas ? "Loading..." : `${price.ethRate}$`}</p>
            </div>
        </section>
    );
};

export default GasPrice;
