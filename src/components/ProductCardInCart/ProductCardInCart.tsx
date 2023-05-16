import React from "react";
import cl from "./_productCardInCart.module.scss";
import { TCartItem } from "../../types";

export const ProductCardInCart = ({
  products,
  addItem,
  removeItem,
  removeAll,
}: {
  products: TCartItem;
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
  removeAll: (id: number) => void;
}) => {
  const { id, count, title, price, image } = products;
  return (
    <article className={cl.item}>
      <img className={cl.item__img} src={image} alt="" />
      <div className={cl.item__card}>
        <h4 className={cl.item__title}>{title}</h4>
        <div className={cl.item__count}>
          <button className={cl.item__btn} onClick={() => removeItem(id)}>
            –
          </button>
          <p>{count}</p>
          <button className={cl.item__btn} onClick={() => addItem(id)}>
            +
          </button>
          <h5 className={cl.item__price}>{price * count}</h5>
        </div>
      </div>
      <button className={cl.item__close} onClick={() => removeAll(id)} />
    </article>
  );
};
