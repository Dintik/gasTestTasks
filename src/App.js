import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { GasPrice } from "./features/gasPrice/GasPrice";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <GasPrice />
            </header>
            <section className="App-section">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter />
            </section>
        </div>
    );
}

export default App;
