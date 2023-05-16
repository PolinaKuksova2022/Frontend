import React from "react";
import cl from "./_total.module.scss";

type TTotal = {
  price: number;
};

export const Total = ({ price }: TTotal) => {
  return (
    <section className={cl.total}>
      <section className={cl.total__partPrice}>
        <h4 className={cl.total__title}>Subtotal</h4>
        <h5 className={cl.total__price}>{price}</h5>
      </section>
      <section className={cl.total__partPrice}>
        <h4 className={cl.total__title}>Tax</h4>
        <h5 className={cl.total__price}>100</h5>
      </section>
      <section className={cl.total__partPrice}>
        <h4 className={cl.total__title}>Shipping</h4>
        <h5 className={cl.total__price}>150</h5>
      </section>
      <section className={cl.total__partPrice}>
        <h4 className={cl.total__title + " " + cl.total__totalPrice}>Total</h4>
        <h5 className={cl.total__price + " " + cl.total__totalPrice}>
          {price == 0 ? 0 : price + 100 + 150}
        </h5>
      </section>
    </section>
  );
};
