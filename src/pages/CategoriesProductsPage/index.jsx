import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import s from "./style.module.css";
import FilterBar from "../../components/FilterBar";
import AllProductsItem from "../../components/AllProductsItem";
import { useEffect } from "react";
import { resetFilter } from "../../store/slice/productsSlice";
import AnimatedPage from "../AnimatedPage";
import { RingLoader } from "react-spinners";

const CategoriesProductsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilter());
  }, [dispatch]);

  const { list, status, error } = useSelector((state) => state.category);

  const products = useSelector((state) => state.products.list);
  const product = products.filter((item) => item.categoryId === +id);
  const categories = list.filter((item) => item.id === +id);

  return (
    <AnimatedPage>
      <div>
        <h1>{categories.map((item) => item.title)}</h1>
        <FilterBar />
        <div className={s.containerItems}>
          {status === "rejected" && <h2>{error}</h2>}

          {status === "loading" ? (
            <RingLoader color={"green"} loading={true} size={100} />
          ) : (
            product
              .filter(({ show }) => show)
              .map((item) => <AllProductsItem key={item.id} {...item} />)
          )}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default CategoriesProductsPage;
