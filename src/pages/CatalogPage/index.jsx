import React from "react";
import { useSelector } from "react-redux";
import CategoryItem from "../../components/CategorieItem";
import s from "./style.module.css";
import { RingLoader } from "react-spinners";
import AnimatedPage from "../AnimatedPage";

const CatalogPage = () => {
  const { list, status, error } = useSelector((state) => state.category);
  const categorie = list.map((item) => (
    <CategoryItem key={item.id} {...item} />
  ));

  return (
    <AnimatedPage>
      <div>
        <div className={s.catalogTitle}>
          <h1 className={s.title}>Catalog</h1>
        </div>
        <div className={s.container}>
          {status === "rejected" && <h2>{error}</h2>}

          {status === "loading" ? (
            <div className={s.loaderContainer}>
              <RingLoader color={"green"} loading={true} size={100} />
            </div>
          ) : (
            categorie
          )}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default CatalogPage;
