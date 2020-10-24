import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { StripeProvider } from 'react-stripe-elements';
import { store, persistor } from "./redux/store";
import Axios from "axios";
import "./style/style.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.bundle";
import constants from "./constants";

async function init() {
    try {
        let refresh_token = localStorage.getItem("refresh_token");
        let lastRefresh = new Date(localStorage.getItem("lastRefresh"));

        if (Math.abs(new Date() - lastRefresh) / 36e5 >= 22 && !/login/i.test(window.location.pathname)) {
            const userInfo = await fetch(`${constants.BASE_API}/refresh/token`, {
                method: "GET",
                headers: {
                    "Refresh-Token": refresh_token
                }
            }).then(resp => resp.json()).then(resp => resp.data);

            localStorage.setItem('token', userInfo.token);
            localStorage.setItem('refresh_token', userInfo.refresh_token);
            localStorage.setItem('name', userInfo?.user?.name);
            localStorage.setItem("lastRefresh", new Date());
        }

        Axios.interceptors.response.use(response => response, error => {
            if (401 === error.response.status && !/login/i.test(window.location.pathname)) {
                window.location.pathname = "/login";
            }
            return error;
        });
    } catch (error) {
        console.log(error);
    }
}

init();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
                <StripeProvider apiKey={constants.STRIPE_KEY}>
                    <App />
                </StripeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
