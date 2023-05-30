import React from "react";
import s from "./style.module.css";
import { NavLink } from "react-router-dom";

const Menu = ({ active, setActive }) => {
  const checkClass = active ? s.active : s.menu;
  return (
    <div className={checkClass} onClick={() => setActive(false)}>
      <div className={s.blur} />
      <div className={s.menuContent} onClick={(e) => e.stopPropagation()}>
        <ul>
          <li>
            <NavLink to="/" onClick={() => setActive(false)}>
              Main page
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={() => setActive(false)}>
              All products
            </NavLink>
          </li>
          <li>
            <NavLink to="/sales" onClick={() => setActive(false)}>
              All sales
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
