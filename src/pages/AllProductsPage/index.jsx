import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AllProductsItem from "../../components/AllProductsItem";
import s from "./style.module.css";
import FiterBar from "../../components/FilterBar";
import { RingLoader } from "react-spinners";
import { useEffect } from "react";
import { resetFilter } from "../../store/slice/productsSlice";
import AnimatedPage from "../AnimatedPage";


const AllProductsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilter());
  }, [dispatch]);

  const { list, status, error } = useSelector((state) => state.products);

  return (
    <AnimatedPage>
      <div className={s.container}>
        <h1 className={s.title}>All products</h1>
        <FiterBar />
        {
          <div className={s.productsList}>
            {status === "rejected" && <h2>{error}</h2>}
            {status === "loading" ? (
              <RingLoader color={"green"} loading={true} size={100} />
            ) : (
              list
                .filter(({ show }) => show)
                .map((item) => <AllProductsItem key={item.id} {...item} />)
            )}
          </div>
        }
      </div>
    </AnimatedPage>
  );
};

export default AllProductsPage;
