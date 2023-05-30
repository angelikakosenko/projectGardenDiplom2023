import React, { useState } from "react";
import s from "./style.module.css";
import { NavLink } from "react-router-dom";
import Menu from "../Menu";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  menuActive
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div className={s.container}>
      <div className={s.logoContainer}>
        <button
          className={s.navBurgerBtn}
          onClick={() => setMenuActive(!menuActive)}
        >
          <span />
        </button>
        <NavLink to="/">
          <div className={s.logo}></div>
        </NavLink>
        <NavLink to="/catalog">
          <button className={s.catalogBtn}>Catalog</button>
        </NavLink>
      </div>
      <div className={s.navContainer}>
        <nav>
          <NavLink to="/">Main page</NavLink>
          <NavLink to="/products">All products</NavLink>
          <NavLink to="/sales">All sales</NavLink>
        </nav>
        <NavLink to="/basket">
          <div className={s.basketImg}></div>
        </NavLink>
        <Menu active={menuActive} setActive={setMenuActive} />
      </div>
    </div>
  );
};

export default Header;
