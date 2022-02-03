import React, { useEffect, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setGasPrice, setLoadingGas } from "../../store/prices/reducer";
import styles from "./styles.module.scss";
import { getGasPrice } from "../../web3/utils";
import { IPriceGas } from "./interfaces";

const GasPrice: React.FC = () => {
    const price: IPriceGas = useAppSelector((state) => state.pricesState);
    const dispatch = useAppDispatch();

    const refreshData = useCallback(async function () {
        dispatch(setLoadingGas());
        const curentGasPrice = await getGasPrice();
        dispatch(setGasPrice(curentGasPrice));
    }, []);

    useEffect(() => {
        refreshData();
    }, []);

    return (
        <section className={styles.gasPrice}>
            <button className={styles.gasPrice__btn} type="button" onClick={refreshData}>
                Refresh Gas Price
            </button>
            <div className={styles.gasPrice__text__wrap}>
                <p className={styles.gasPrice__text}>Gas price: {price.isLoadingGas ? "Loading..." : `${price.gasPrice} gwei`}</p>
            </div>
        </section>
    );
};

export default GasPrice;
