import React from "react";

import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import { styles } from "../styles";

export const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            alt="Logo"
            className="w-[266px] h-[72px] object-contain"
            src={logo}
          />

          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable, and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row flex-wrap justify-between md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-lg text-white leading-[27px]">
                {footerLink.title}
              </h4>
              <ul className="mt-4">
                {footerLink.links.map((link) => (
                  <li
                    key={link.name}
                    className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary mb-3 last:mb-0 cursor-pointer"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t border-t-[#3F3E45]">
        <p className="font-poppins font-light text-base text-white text-center leading-[27px]">
          2021 HooBank. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social) => (
            <img
              key={social.id}
              alt={social.id}
              className="w-[21px] h-[21px] object-contain cursor-pointer mr-6 last:mr-0"
              src={social.icon}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};
