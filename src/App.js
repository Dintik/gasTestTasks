import { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
    const [gasPrice, setGasPrice] = useState("...");

    const connect = useCallback(async function () {
        setGasPrice("...");
        const { ethers } = require("ethers");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const feeData = await provider.getFeeData();
        const gasPrice = feeData.gasPrice;
        const gasPriceString = ethers.utils.formatUnits(gasPrice, 9);
        const gasPriceWei = Number(gasPriceString).toFixed(3);
        setGasPrice(gasPriceWei);
    }, []);

    useEffect(() => {
        connect();
    }, [connect]);

    return (
        <div className="App">
            <header className="App-header">
                <p className="App-header-text">gas - {gasPrice} wei</p>{" "}
                <button
                    className="App-header-btn"
                    type="button"
                    onClick={connect}
                >
                    Refresh
                </button>
            </header>
            <section className="App-section">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <span>
                    <span>Learn </span>
                    <a
                        className="App-link"
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React
                    </a>
                    <span>, </span>
                    <a
                        className="App-link"
                        href="https://redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux
                    </a>
                    <span>, </span>
                    <a
                        className="App-link"
                        href="https://redux-toolkit.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux Toolkit
                    </a>
                    ,<span> and </span>
                    <a
                        className="App-link"
                        href="https://react-redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React Redux
                    </a>
                </span>
            </section>
        </div>
    );
}

export default App;
