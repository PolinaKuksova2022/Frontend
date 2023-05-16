import React from "react";
import cl from "./_catalog.module.scss";
import { productsList } from "../../data";
import { ProductItem } from "../ProductItem/ProductItem";
import { TProductItem } from "../../types";

export const Catalog = () => {
  return (
    <section className={cl.catalog__inner}>
      {productsList.map((item: TProductItem) => (
        <ProductItem products={item} key={item.id} />
      ))}
    </section>
  );
};
