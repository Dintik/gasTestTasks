import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import GasPrice from "../index";
const mockStore = configureMockStore([thunk]);

describe("Gas Price", () => {
    it("should render loading", () => {
        const store = mockStore({
            pricesState: {
                gasPrice: null,
                ethRate: null,
                isLoadingGas: true,
                isLoadingEth: true
            }
        });

        const { asFragment } = render(
            <Provider store={store}>
                <GasPrice />
            </Provider>
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it("should render correctly without data", () => {
        const store = mockStore({
            pricesState: {
                ethRate: "Sorry, there was an error",
                gasPrice: "Sorry, there was an error"
            }
        });

        const { asFragment } = render(
            <Provider store={store}>
                <GasPrice />
            </Provider>
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it("should render data", () => {
        const store = mockStore({
            pricesState: {
                ethRate: "2697.51",
                gasPrice: "154.788"
            }
        });

        const { asFragment } = render(
            <Provider store={store}>
                <GasPrice />
            </Provider>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});

export {};
