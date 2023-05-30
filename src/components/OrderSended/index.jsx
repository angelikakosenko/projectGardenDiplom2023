import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { BsShop } from "react-icons/bs";
import { MdDirectionsRun } from "react-icons/md";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const OrderSended = () => {
  const { status, error } = useSelector((state) => state.order);

  return status === "rejected" ? (
    <h2>{error}</h2>
  ) : (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <h2 className={s.title}>
          Your order has been shipped and is being processed
          <span>
            <TbTruckDelivery /> ... <BsFillHouseDoorFill />
          </span>
        </h2>
      </div>
      <div className={s.linkToMain}>
        <Link to={"/products"}>Back to the store</Link>
        <span className={s.icon}>
          {" "}
          <MdDirectionsRun /> <BsShop />
        </span>
      </div>
    </div>
  );
};

export default OrderSended;
