import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <div>
      <button
        className={`bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-200 ${styles}`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
