import React from "react";
import s from "./style.module.css";
import { useSelector } from "react-redux";
import AllProductsItem from "../../components/AllProductsItem";
import FiterBar from "../../components/FilterBar";
import { RingLoader } from "react-spinners";
import AnimatedPage from "../AnimatedPage";

const AllSalesPage = () => {
  const { list, status, error } = useSelector((state) => state.products);
  return (
    <AnimatedPage>
      <div className={s.container}>
        <h1 className={s.title}>Products with sale</h1>

        <FiterBar />
        {
          <div className={s.productsList}>
            {status === "rejected" && <h2>{error}</h2>}
            {status === "loading" ? (
              <RingLoader color={"green"} loading={true} size={100} />
            ) : (
              list
                .filter(({ show }) => show)
                .map((item) =>
                  item.discont_price ? (
                    <AllProductsItem key={item.id} {...item} />
                  ) : (
                    ""
                  )
                )
            )}
          </div>
        }
      </div>
    </AnimatedPage>
  );
};

export default AllSalesPage;
