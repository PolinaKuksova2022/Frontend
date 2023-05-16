import React from "react";
import cl from "./_productItem.module.scss";
import { ReactComponent as CartImg } from "../../../public/Images/cart2.svg";
import { action, useSelector, RootState, useDispatch } from "../../store/index";
import { TCartItem, TProductItem } from "../../types";
import { Link } from "react-router-dom";

export const ProductItem = ({ products }: { products: TProductItem }) => {
  const { id, title, price, image } = products;

  const cartItems: TCartItem[] = useSelector(
    (state: RootState) => state.cartItems
  );
  const dispatch = useDispatch();

  const isProductInCart = cartItems.find((x) => x.id == id) !== undefined;

  const addOrRemoveFromCart = () => {
    if (isProductInCart) {
      dispatch(action.setCartItems([...cartItems].filter((x) => x.id != id)));
      return;
    }
    dispatch(action.setCartItems([...cartItems, { ...products, count: 1 }]));
  };

  return (
    <article className={cl.item}>
      <Link to={`/product/${id}`}>
        <img className={cl.item__img} src={image} alt="" />
      </Link>
      <h4 className={cl.item__title}>{title}</h4>
      <div className={cl.item__cart}>
        <button
          className={
            isProductInCart
              ? cl.item__btn + " " + cl.inCart
              : cl.item__btn + " " + cl.notInCart
          }
          onClick={() => addOrRemoveFromCart()}
        >
          <CartImg />
        </button>
        <h5 className={cl.item__price}>{price}</h5>
      </div>
    </article>
  );
};
