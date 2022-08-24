import React from "react";

import { card } from "../assets";
import { styles, layout } from "../styles";
import { Button } from "./Button";

export const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          architecto alias et optio quod sequi doloremque sapiente enim hic
          adipisci!
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg}`}>
        <img alt="Card" className="w-full h-full object-contain" src={card} />
      </div>
    </section>
  );
};
