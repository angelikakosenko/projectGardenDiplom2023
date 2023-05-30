import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CategoryItem from "../CategorieItem";
import { RingLoader } from "react-spinners";

const Catalog = () => {
  const { list, status, error } = useSelector((state) => state.category);
  const categorie = list.map((item) => (
    <CategoryItem key={item.id} {...item} />
  ));

  return (
    <section className={s.container}>
      <div className={s.catalogTitle}>
        <h1 className={s.title}>Catalog</h1>
        <Link to="/catalog">
          <button className={s.linkToAllCategoriesBtn}>All categories</button>
        </Link>
      </div>
      <div className={s.catalogList}>
        {status === "rejected" && <h2>{error}</h2>}
        {status === "loading" ? (
          <RingLoader color={"green"} loading={true} size={100} />
        ) : (
          categorie.slice(0, 4)
        )}
      </div>
    </section>
  );
};

export default Catalog;
