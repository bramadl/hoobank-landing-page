import React from "react";

import { apple, bill, google } from "../assets";
import { styles, layout } from "../styles";

export const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          alt="Billing"
          className="relative z-[5] w-full h-full"
          src={bill}
        />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          Easy control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, neque?
          Molestias non amet enim dolore! Porro veniam suscipit voluptatem aut?
        </p>
        <div className="flex flex-row flex-wrap gap-5 sm:mt-10 mt-6">
          <img
            alt="Apple Store"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
            src={apple}
          />
          <img
            alt="Google Play"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
            src={google}
          />
        </div>
      </div>
    </section>
  );
};
