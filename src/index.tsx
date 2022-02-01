import React from "react";
import ReactDOM from "react-dom";
import "./static/assets/styles/index.scss";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);
