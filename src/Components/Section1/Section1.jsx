import React, { useEffect } from "react";
import Card from "../Card/Card";
import butterfyImage from "../../Images/butter-fly.jpg";
import style from "./Section1.module.css";
import WOW from "wowjs";

const Section1 = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <div className={style.section}>
      <h2 className={style.sectionHeading}>SECTION</h2>

      <div className={style.sectionContainer}>
        <div
          className="wow slideInLeft"
          data-wow-duration="2s"
          data-wow-delay="5s"
        >
          <Card className={style.card}>
            <img src={butterfyImage} alt="butterfly" />
          </Card>
        </div>

        <Card>
          <h1 className={style.heading}>This is Heading</h1>
          <p className={style.content}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Section1;
