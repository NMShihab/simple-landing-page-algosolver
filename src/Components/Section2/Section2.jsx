import React from "react";
import Card from "../Card/Card";
import style from "../Section1/Section1.module.css";

const Section2 = () => {
  return (
    <div>
      <div>
        <h1 className={style.sectionHeading}>SECTION</h1>

        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card>
            <h1 className={style.heading}>This is Heading</h1>
            <p className={style.content}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).{" "}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Section2;
