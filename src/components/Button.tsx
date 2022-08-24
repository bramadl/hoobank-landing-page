import React from "react";

type ButtonProps = {
  styles: string;
};

export const Button: React.FC<ButtonProps> = ({ styles }) => {
  return (
    <button
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-lg text-primary outline-none ${styles} rounded-[10px]`}
      type="button"
    >
      Get Started
    </button>
  );
};
