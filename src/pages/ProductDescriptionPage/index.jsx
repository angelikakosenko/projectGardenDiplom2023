import React from "react";
import s from "./style.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { add } from "../../store/slice/basketSlice";
import AnimatedPage from "../AnimatedPage";

const ProductDescriptionPage = () => {
  const { id } = useParams();

  const { list } = useSelector((state) => state.products);
  const product = list.find((item) => item.id === +id);

  const dispatch = useDispatch();

  const render = () => {
    if (product === undefined) {
      return (
        <ReactLoading
          type="spinningBubbles"
          color="#339933"
          height={"20%"}
          width={"20%"}
        />
      );
    } else {
      const { description, discont_price, price, image, title } = product;
      return (
        <div className={s.container}>
          <h1>{title}</h1>
          <div className={s.containerInfo}>
            <div className={s.productImg}>
              <img src={`http://localhost:3333${image}`} alt={title} />
            </div>
            <div className={s.productInfo}>
              <div className={s.priceInfo}>
                {discont_price ? (
                  <>
                    <p className={s.discount}>
                      {discont_price}
                      <span>$</span>
                    </p>
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
              <button
                className={s.toCartBtn}
                onClick={() => dispatch(add(+id))}
              >
                To cart
              </button>
              <div className={s.productDescription}>
                <h4>Description</h4>
                <p className={s.description}>{description}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return <AnimatedPage>{render()}</AnimatedPage>;
};

export default ProductDescriptionPage;
