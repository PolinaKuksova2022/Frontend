import React from "react";
import "./styles/main.scss";
import { RootState, useSelector } from "./store";
import { Cart } from "./components/Cart/Cart";
import { Shop } from "./components/Shop/Shop";

export const App = () => {
  const cart: boolean = useSelector((state: RootState) => state.cart);

  return (
    <main className="container">
      <div className="container__desktop">
        <Shop />
        <Cart />
      </div>
      <div className="container__handheld">{cart ? <Cart /> : <Shop />}</div>
    </main>
  );
};
