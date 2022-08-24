import React from "react";

import { feedbacks } from "../constants";
import { styles } from "../styles";
import { FeedbackCard } from "./FeedbackCard";

export const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-0 w-[60%] h-[60%] -right-1/2 rounded-full blue__gradient" />
      <div className="relative z-[1] w-full flex md:flex-row flex-col justify-between items-center sm:mb-16 mb-6">
        <h2 className={styles.heading2}>
          What people are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments <br />
            and grow your business anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="feedback-container relative z-[1] w-full flex flex-wrap sm:justify-start justify-center">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} {...feedback} />
        ))}
      </div>
    </section>
  );
};
