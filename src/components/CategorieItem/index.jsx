import React from "react";
import s from "./style.module.css";
import { Link, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const CategoryItem = ({ id, title, image }) => {
  useParams();
  return (
    <div className={s.container}>
      <Link to={`/catalog/${id}`}>
        <img src={`http://localhost:3333${image}`} alt={title} />
        <p>
          {title === undefined ? (
            <ClipLoader
              color={"green"}
              loading={true}
              size={150}
              aria-label="Load Spinner"
              data-testid="loader"
            />
          ) : (
            title
          )}
        </p>
      </Link>
    </div>
  );
};

export default CategoryItem;
