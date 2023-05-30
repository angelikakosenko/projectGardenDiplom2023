import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { add } from "../../store/slice/basketSlice";

const AllProductsItem = ({ id, price, title, image, discont_price }) => {
  const dispatch = useDispatch();
  const [itemClassName, setItemClassName] = useState(false);
  
  const link = `/products/${id}`;


  return (
    <div
      className={s.container}
      onMouseEnter={() => setItemClassName(!false)}
      onMouseLeave={() => setItemClassName(false)}
    >
      <div className={s.imgContainer}>
        <img src={`http://localhost:3333${image}`} alt={title} />
        {
        itemClassName && (
          <button className={s.addBtn} onClick={() => {
            // toast(`Product add!`)
            dispatch(add(id))
            }}>
            add to cart
          </button>
        )}
      </div>

      <Link to={link}>
        <div className={s.priceInfo}>
          {discont_price ? (
            <>
              <p className={s.discount}>{discont_price}$</p>
              <p className={s.price}>{price}$</p>
              <p className={s.precent}>
                -{((price / discont_price - 1) * 100).toFixed(0)}%
              </p>
            </>
          ) : (
            <>
              <p className={s.normalPrice}>{price}$</p>
            </>
          )}
        </div>
        <p className={s.productsTitle}>{title}</p>
      </Link>
      {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        /> */}
      </div>
  );
};

export default AllProductsItem;
