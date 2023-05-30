import React from "react";
import s from "./style.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { fetchCupon } from "../../store/slice/cuponSlice";

const SendCupon = () => {
  const dispatch = useDispatch();

  const notifyOk = () => toast(`sale add!`);
  const notifyNotOk = () => toast(`pleace, write your number!`);

  const sendNumber = (e) => {
    e.preventDefault();
    let input = +e.target.tel.value;
    if (input) {
      dispatch(fetchCupon(input));
      notifyOk();
    } else {
      notifyNotOk();
    }
  };

  return (
    <>
      <section className={s.container}>
        <div className={s.sendCuponImg}></div>
        <div className={s.sendCuponForm}>
          <div className={s.cuponText}>
            <p className={s.cuponTitle}>5% off</p>
            <p className={s.cuponSubtitle}>on the firs order</p>
          </div>
          <form className={s.containerSubmitNumber} onSubmit={sendNumber}>
            <input type="tel" name="tel" id="tel" placeholder="+49" />
            <button>Get a discount</button>
          </form>
        </div>
      </section>
      <ToastContainer
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
      />
    </>
  );
};

export default SendCupon;
