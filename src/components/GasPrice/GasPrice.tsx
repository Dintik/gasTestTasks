import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGasPrice, setEthRate } from "../../store/prices/reducer";
import { getStoreGasPrice, getStoreEthRate } from "../../store/prices/helpers";
import styles from "./styles.module.scss";
import { getGasPrice, getEthRate } from "../../helpers";

const GasPrice: React.FC = () => {
    const price = {
        gas: useSelector(getStoreGasPrice),
        eth: useSelector(getStoreEthRate)
    };
    const dispatch = useDispatch();

    const refreshData = useCallback(async function () {
        dispatch(setGasPrice("...")); // you can add for clarity
        dispatch(setEthRate("...")); // you can add for clarity
        const gasPrice = await getGasPrice();
        const ethRate = await getEthRate();
        dispatch(setGasPrice(gasPrice));
        dispatch(setEthRate(ethRate));
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
                <p className={styles.gasPrice__text}>Gas price: {price?.gas} gwei</p>
                <p className={styles.gasPrice__text}>Exchange rate: {price?.eth}$</p>
            </div>
        </section>
    );
};

export default GasPrice;
