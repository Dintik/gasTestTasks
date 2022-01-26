import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGasPrice } from "../../store/gasPrice/reducer";
import { getStoreGasPrice } from "../../store/gasPrice/helpers";
import styles from "./styles.module.scss";
import { getGasPrice, getEthRate } from "../../helpers";

const GasPrice = () => {
    const gasPrice = useSelector(getStoreGasPrice);
    const dispatch = useDispatch();
    const [ethPrice, setEthPrice] = useState(0);

    const refreshData = useCallback(async function () {
        dispatch(setGasPrice("..."));
        setEthPrice("...");
        const gasPrice = await getGasPrice();
        const ethRate = await getEthRate();
        dispatch(setGasPrice(gasPrice));
        setEthPrice(ethRate);
    }, []);

    useEffect(() => {
        refreshData();
    }, []);

    return (
        <section className={styles.gasPrice}>
            <div>
                <p className={styles.gasPrice__text}>
                    Gas price: {gasPrice} gwei
                </p>
                <p className={styles.gasPrice__text}>
                    Exchange rate: {ethPrice}$
                </p>
            </div>
            <button
                className={styles.gasPrice__btn}
                type="button"
                onClick={refreshData}
            >
                Refresh
            </button>
        </section>
    );
};

export default GasPrice;
