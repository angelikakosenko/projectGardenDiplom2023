import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";
import bannerImg from "./bannerImg.png";

const SaleBanner = () => (
  <section className={s.saleBanner}>
    <div className={s.linkToSale}>
      <div className={s.saleTitle}>
        <p className={s.title}>Sale</p>
        <p className={s.subTitle}>New season</p>
        <Link to="/sales">
          <button>Sale</button>
        </Link>
      </div>
    </div>
    <div className={s.bannerImgContainer}>
      <img src={bannerImg} alt="bannerImg" />
    </div>
  </section>
);

export default SaleBanner;
