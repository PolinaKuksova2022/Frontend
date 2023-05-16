import React from "react";
import cl from "./_productCard.module.scss";
import { ReactComponent as CartImg } from "../../../public/Images/cart2.svg";
import { Link, useParams } from "react-router-dom";
import { productsList } from "../../data";
import { TCartItem, TProductItem } from "../../types";
import { RootState, action, useDispatch, useSelector } from "../../store";

export const ProductCard = () => {
  const { id } = useParams();
  const product = productsList.filter(
    (productItem: TProductItem) => `${productItem.id}` === id
  )[0];
  const cartItems: TCartItem[] = useSelector(
    (state: RootState) => state.cartItems
  );
  const dispatch = useDispatch();

  const isProductInCart =
    cartItems.find((x) => x.id == product.id) !== undefined;

  const addOrRemoveFromCart = () => {
    if (isProductInCart) {
      dispatch(
        action.setCartItems([...cartItems].filter((x) => x.id != product.id))
      );
      return;
    }
    dispatch(action.setCartItems([...cartItems, { ...product, count: 1 }]));
  };
  return (
    <section className={cl.product__inner}>
      <Link className={cl.product__btn + " " + cl.link} to={`/`}>
        Back in catalog
      </Link>
      <img className={cl.product__img} src={product.image} alt="" />
      <h1 className={cl.product__title}>{product.title}</h1>
      <h2 className={cl.product__description}>Item model number: MT91547</h2>
      <div className={cl.product__cart}>
        <button
          className={
            isProductInCart
              ? cl.product__btn + " " + cl.cart + " " + cl.inCart
              : cl.product__btn + " " + cl.cart
          }
          onClick={() => addOrRemoveFromCart()}
        >
          <CartImg />
        </button>
        <h5 className={cl.product__price}>{product.price}</h5>
      </div>
    </section>
  );
};
