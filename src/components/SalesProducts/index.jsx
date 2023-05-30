import React from "react";
import { useSelector } from "react-redux";
import s from "./style.module.css";
import SalesItem from "../SalesItem";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";

const SalesProducts = () => {
  const { list, status, error } = useSelector((state) => state.products);
  const filterdSaleProducts = list.filter(
    (item) => item.discont_price !== null
  );
  const products = filterdSaleProducts.map((item) => (
    <SalesItem key={item.id} {...item} />
  ));

  return (
    <section className={s.container}>
      <div className={s.salesTitle}>
        <Link to="/sales">
          <h1 className={s.title}>Sales</h1>
        </Link>
      </div>
      <div className={s.salesList}>
        {status === "rejected" && <h2>{error}</h2>}

        {status === "loading" ? (
          <RingLoader color={"green"} loading={true} size={100} />
        ) : (
          products.slice(0, 4)
        )}
      </div>
    </section>
  );
};

export default SalesProducts;
