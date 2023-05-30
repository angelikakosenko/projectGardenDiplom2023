import React from "react";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrCount,
  incrCount,
  removeProduct,
} from "../../store/slice/basketSlice";


const BasketItem = ({ id, title, price, discont_price, image, count }) => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.cupon);

  const cuponCalculation = (price - (price * 5) / 100) * count;

  return (
    <div className={s.container}>
      <img src={`http://localhost:3333${image}`} alt={title} />
      <div className={s.itemInfoContainer}>
        <div className={s.titleContainer}>
          <p>{title}</p>
          <div className={s.countItem}>
            <button className={s.incr} onClick={() => dispatch(decrCount(id))}>
              -
            </button>
            <p>{count}</p>
            <button className={s.decr} onClick={() => dispatch(incrCount(id))}>
              +
            </button>
          </div>
        </div>
        <div className={s.priceContainer}>
          {discont_price ? (
            <>
              <p className={s.discount}>{discont_price * count}$</p>
              <p className={s.price}>{price * count}$</p>
            </>
          ) : (
            <>
              {list.cupon ? (
                <>
                  <p className={s.normalPrice}>
                    {cuponCalculation.toFixed(2)}$
                  </p>
                  <p className={s.price}>{price * count}$</p>
                </>
              ) : (
                <p className={s.normalPrice}>{price * count}$</p>
              )}
            </>
          )}
        </div>
        <button
          className={s.deleteItem}
          onClick={() => dispatch(removeProduct(id))}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
