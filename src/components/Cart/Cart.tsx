import React from "react";
import cl from "./_cart.module.scss";
import { ProductCardInCart } from "../ProductCardInCart/ProductCardInCart";
import { Total } from "../Total/Total";
import { TCartItem, TProductItem } from "../../types";
import { RootState, useDispatch, useSelector, action } from "../../store";

export const Cart = () => {
  let cartItems: TCartItem[] = useSelector(
    (state: RootState) => state.cartItems
  );
  const dispatch = useDispatch();

  const cart: boolean = useSelector((state: RootState) => state.cart);

  const cartOpenClose = () => {
    dispatch(action.showCart(!cart));
  };

  cartItems = [...cartItems];

  const addItem = (id: number) => {
    const itemIndex = cartItems.findIndex((x) => x.id == id);
    const item = cartItems[itemIndex];
    const newItem = { ...item, count: item.count + 1 };
    cartItems.splice(itemIndex, 1, newItem);

    dispatch(action.setCartItems(cartItems));
  };

  const removeItem = (id: number) => {
    const itemIndex = cartItems.findIndex((x) => x.id == id);
    const item = cartItems[itemIndex];
    if (item.count > 1) {
      cartItems.splice(itemIndex, 1, { ...item, count: item.count - 1 });
    } else {
      cartItems.splice(itemIndex, 1);
    }

    dispatch(action.setCartItems(cartItems));
  };
  
  const removeAll = (id: number) => {
    cartItems = cartItems.filter(x => x.id !== id)
    dispatch(action.setCartItems(cartItems));
  };

  const price = cartItems
    .map((i) => i.price * i.count)
    .reduce((acc, curr) => curr + acc, 0);

  return (
    <aside className={cl.cart}>
      <section className={cl.cart__section}>
        <button
          className={cl.cart__cross}
          onClick={() => cartOpenClose()}
        ></button>
        <h3 className={cl.cart__title}>My basket</h3>
        {cartItems.map((item: TCartItem) => (
          <ProductCardInCart
            products={item}
            addItem={addItem}
            removeItem={removeItem}
            removeAll={removeAll}
            key={item.id}
          />
        ))}
      </section>
      <Total price={price} />
    </aside>
  );
};
