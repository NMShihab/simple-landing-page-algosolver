import React from "react";
import fb from "../../Images/social/fb.png";
import linkedin from "../../Images/social/linkein.png";
import youtube from "../../Images/social/youtube.png";
import instra from "../../Images/social/insta.png";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div>
        <img src={fb} alt="fb" />
      </div>
      <div>
        <img src={instra} alt="instra" />
      </div>
      <div>
        <img src={youtube} alt="youtube" />
      </div>
      <div>
        <img src={linkedin} alt="linkedin" />
      </div>
    </div>
  );
};

export default Footer;
