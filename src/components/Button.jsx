import React from "react";

const Button = ({ className, img, text, onclick }) => {
  return (
    <button
      onClick={onclick}
      className={`flex justify-center items-center gap-1.5 ${className}`}
    >
      {img && <img src={img} alt="" className="h-6 w-6 object-contain" />}
      {text}
    </button>
  );
};

export default Button;
