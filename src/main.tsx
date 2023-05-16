import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header/Header";
import { Provider } from "react-redux";
import { store } from "./store";
import { HashRouter } from "react-router-dom";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Header />
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
