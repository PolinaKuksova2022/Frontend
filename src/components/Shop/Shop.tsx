import React from "react";
import cl from "./_shop.module.scss";
import { Route, Routes } from "react-router-dom";
import { Catalog } from "../Catalog/Catalog";
import { ProductCard } from "../ProductCard/ProductCard";

export const Shop = () => {
  return (
    <div className={cl.shop}>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductCard />} />
      </Routes>
    </div>
  );
};
