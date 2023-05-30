import React from "react";
import s from "./style.module.css";
import notFound from "./404.png";

const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <img src={notFound} alt="notFoundImg" />
    </div>
  );
};

export default NotFoundPage;
