import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { StripeProvider } from 'react-stripe-elements';
import { store, persistor } from "./redux/store";
import "./style/style.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.bundle";
import constants from "./constants";

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
