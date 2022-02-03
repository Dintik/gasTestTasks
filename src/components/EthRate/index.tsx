import React, { useEffect, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setEthRate, setLoadingEth } from "../../store/prices/reducer";
import styles from "./styles.module.scss";
import { getEthRate } from "../../api/getEthRate";
import { IRateEth } from "./interfaces";

const EthRate: React.FC = () => {
    const price: IRateEth = useAppSelector((state) => state.pricesState);
    const dispatch = useAppDispatch();

    const refreshData = useCallback(async function () {
        dispatch(setLoadingEth());
        const curentEthRate = await getEthRate();
        dispatch(setEthRate(curentEthRate));
    }, []);

    useEffect(() => {
        refreshData();
    }, []);

    return (
        <section className={styles.ethRate}>
            <button className={styles.ethRate__btn} type="button" onClick={refreshData}>
                Refresh Eth Rate
            </button>
            <div className={styles.ethRate__text__wrap}>
                <p className={styles.ethRate__text}>Exchange rate: {price.isLoadingEth ? "Loading..." : `${price.ethRate}$`}</p>
            </div>
        </section>
    );
};

export default EthRate;
