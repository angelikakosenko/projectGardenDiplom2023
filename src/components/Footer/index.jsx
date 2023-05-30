import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className={s.footer}>
    <div className={s.info}>
      <div className={s.contacts}>
        <h3>Contact</h3>
        <p className={s.numberPhone}>+49 999 999 99 99</p>
        <div className={s.socLicks}>
          <div className={s.inst}>
            <div className={s.instIcon}></div>
            <p>instagram</p>
          </div>
          <div className={s.whatsApp}>
            <div className={s.whatsAppIcon}></div>
            <p>WhatsApp</p>
          </div>
        </div>
      </div>
      <div className={s.adress}>
        <h3>Adress</h3>
        <Link to="http://surl.li/gecez" className={s.linkToMap}>
          Linkstraße 2, 8 OG, 10785,
          <br /> Berlin, Deutschland
        </Link>
        <p className={s.worksTimeTitle}>
          Working Hours:
          <br />
          <strong>24 hours a day</strong>
        </p>
      </div>
    </div>
    <iframe
      className={s.map}
      title="Adress"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428. 4102799825387!2d13.        372912915244186!3d5250791374487811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13. 1!3m3!1m2!1s0x47a851cbdd6cfe0f%3A0xb4b0903f299decf1!2sLinkstra%C3%9Fe%202%2F8. %20Etage%2C%2010785%20Berlin!5e0!3m2!1sru!2sde!4v1680855564778!5m2!1sru!2sde"
      loading="lazy"
    />
  </div>
);

export default Footer;
