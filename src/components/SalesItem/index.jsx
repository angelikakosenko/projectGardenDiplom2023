import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { add } from "../../store/slice/basketSlice";

const SalesItem = ({ id, title, image, price, discont_price }) => {
  const dispatch = useDispatch();
  const [itemClassName, setItemClassName] = useState(false);

  return (
    <div
      className={s.container}
      onMouseEnter={() => setItemClassName(!false)}
      onMouseLeave={() => setItemClassName(false)}
    >
      <img src={`http://localhost:3333${image}`} alt={title} />
      {itemClassName && (
        <button className={s.addBtn} onClick={() => dispatch(add(id))}>
          add to cart
        </button>
      )}
      <Link to={`/prdoucts/${id}`}>
        <div className={s.priceInfo}>
          <p className={s.discount}>{discont_price}$</p>
          <p className={s.price}>{price}$</p>
          <p className={s.precent}>
            -{((price / discont_price - 1) * 100).toFixed(0)}%
          </p>
        </div>
        <p className={s.productsTitle}>{title}</p>
      </Link>
    </div>
  );
};
export default SalesItem;
