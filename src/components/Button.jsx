import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-secondary rounded-[10px] outline-none ${styles}`}>
    GET STARTED
  </button>
);

export default Button;
