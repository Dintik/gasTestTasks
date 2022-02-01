import React, { useEffect, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setGasPrice, setEthRate } from "../../store/prices/reducer";
import styles from "./styles.module.scss";
import { getEthRate } from "../../api/getEthRate";
import { getGasPrice } from "../../web3/utils";
import { IPrice } from "./interfaces";

const GasPrice: React.FC = () => {
    const price: IPrice = useAppSelector((state) => state.prices);
    const dispatch = useAppDispatch();

    const refreshData = useCallback(async function () {
        dispatch(setGasPrice("...")); // you can add for clarity
        dispatch(setEthRate("...")); // you can add for clarity
        const curentprice: IPrice = {
            gasPrice: await getGasPrice(),
            ethRate: await getEthRate()
        };
        dispatch(setGasPrice(curentprice.gasPrice));
        dispatch(setEthRate(curentprice.ethRate));
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
                <p className={styles.gasPrice__text}>Gas price: {price.gasPrice} gwei</p>
                <p className={styles.gasPrice__text}>Exchange rate: {price.ethRate}$</p>
            </div>
        </section>
    );
};

export default GasPrice;
