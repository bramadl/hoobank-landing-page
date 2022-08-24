import React from "react";

import { quotes } from "../assets";

type FeedbackCardProps = {
  id: string;
  content: string;
  name: string;
  title: string;
  img: string;
};

export const FeedbackCard: React.FC<FeedbackCardProps> = ({
  content,
  name,
  title,
  img,
}) => {
  return (
    <div className="feedback-card max-w-[370px] flex flex-col justify-between md:mr-10 sm:mr-5 mr-0 my-5 px-10 py-12 rounded-[20px]">
      <img
        alt="Quotes"
        className="w-[42px] h-[27px] object-contain"
        src={quotes}
      />
      <p className="font-poppins font-normal text-lg text-white leading-[32px] my-10">
        {content}
      </p>
      <div className="flex flex-row">
        <img alt={name} className="w-[48px] h-[48px] rounded-full" src={img} />
        <div className="flex flex-col ml-4">
          <h3 className="font-poppins font-semibold text-xl text-white leading-[32px]">{name}</h3>
          <p className="font-poppins font-normal text-[16px] text-dimWhite leading-[24px]">{title}</p>
        </div>
      </div>
    </div>
  );
};
