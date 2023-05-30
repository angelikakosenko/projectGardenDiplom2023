import React, { useEffect, useState } from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import {
  filterByPrice,
  filteredSales,
  sort,
} from "../../store/slice/productsSlice";

const FilterPoppup = ({ active, setActive }) => {
  const checkClass = active ? s.active : s.filterPoppup;

  const dispatch = useDispatch();

  const initialValue = { min: 0, max: Infinity };

  const [price, setPrice] = useState(initialValue);
  const [check, setCheck] = useState(!true);

  useEffect(() => {
    dispatch(filterByPrice(price));
  }, [price, dispatch]);

  const setMaxPrice = (value) => setPrice(({ min }) => ({ min, max: value }));

  const setMinPrice = (value) => setPrice(({ max }) => ({ max, min: value }));

  const location = document.location;

  const handleFilterMinPrice = ({ target }) => {
    const value = +target.value;
    setMinPrice(value);
  };

  const handleFilterMaxPrice = ({ target }) => {
    const value = target.value === "" ? Infinity : +target.value;
    setMaxPrice(value);
  };

  const sortOnChange = (e) => {
    dispatch(sort(+e.target.value));
  };

  const changeCheck = () => {
    setCheck(!check);
    dispatch(filteredSales(!check));
  };

  return (
    <div className={checkClass}>
      <div className={s.filterPrice}>
        <p>Price</p>
        <input
          type="number"
          name="minPrice"
          id="minPrice"
          value={price.min === 0 ? "" : price.min}
          placeholder="min Price"
          onChange={handleFilterMinPrice}
        />
        <input
          type="number"
          name="maxPrice"
          id="maxPrices"
          value={price.max === Infinity ? "" : price.max}
          placeholder="max Price"
          onChange={handleFilterMaxPrice}
        />
      </div>
      <div className={s.filterDiscontProduct}>
        {location.pathname === "/sales" ? (
          ""
        ) : (
          <>
            <p>Discounted items</p>
            <input type="checkbox" checked={check} onChange={changeCheck} />
          </>
        )}
      </div>
      <div className={s.sortProduct}>
        <p>Sorted</p>
        <select name="sort" id="sort" onChange={sortOnChange}>
          <option value="1">By price up</option>
          <option value="2">By price down</option>
        </select>
      </div>
      <button
        className={s.resetFilterBtn}
        onClick={() => (
          setPrice({ min: 0, max: Infinity }), setCheck(!true), setActive(false)
        )}
      >
        reset filters
      </button>
    </div>
  );
};

export default FilterPoppup;
