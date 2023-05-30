import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import BasketItem from "../../components/BasketItem";
import BasketCalculation from "../../components/BasketCalculation";
import { useSelector } from "react-redux";
import AnimatedPage from "../AnimatedPage";

const BasketPage = () => {
  const { list } = useSelector((state) => state.basket);
  const products = useSelector((state) => state.products.list);
  const productsStatus = useSelector((state) => state.products.status);

  const data = list.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });

  return (
    <AnimatedPage>
      <div className={s.container}>
        <h1>Shopping Cart</h1>
        <div className={s.linkToMain}>
          <Link to={"/products"}>Back to the store</Link>
          <span>{">"}</span>
        </div>
        <div className={s.basketInfoContainer}>
          {productsStatus === "loading" ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className={s.basketItemContainer}>
                {data.map((item) => (
                  <BasketItem key={item.id} {...item} />
                ))}
              </div>
              <BasketCalculation />
            </>
          )}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default BasketPage;
