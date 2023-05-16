import React, { useState } from "react";
import cl from "./_header.module.scss";
import { ReactComponent as CartImg } from "../../../public/Images/cart.svg";
import { RootState, action, useDispatch, useSelector } from "../../store";
import { TCartItem } from "../../types";

export const Header = () => {
  const cartItems: TCartItem[] = useSelector(
    (state: RootState) => state.cartItems
  );

  const cart: boolean = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const cartOpenClose = () => {
    dispatch(action.showCart(!cart));
  };

  const totalCount = cartItems.reduce(
    (prev: number, curr: TCartItem) => prev + curr.count,
    0
  );

  return (
    <header className={cl.header}>
      <div className={cl.header__name}>
        <h1 className={cl.header__title}>SP</h1>
        <h2 className={cl.header__subtitle}>.shop</h2>
      </div>
      <div className={cl.header__cartMenu}>
        <button className={cl.header__cart} onClick={() => cartOpenClose()}>
          <div className={cl.header__cart_count}>{totalCount}</div>
          <CartImg className={cl.header__cart_img} />
        </button>
        <button className={cl.header__menu} onClick={() => cartOpenClose()}>
          <span
            className={cart ? cl.header__menu_cross : cl.header__menu_lines}
          ></span>
        </button>
      </div>
    </header>
  );
};
