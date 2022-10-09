import React from "react";

const Input = ({ placeholder }) => {
  return (
    <>
      <div className="input">
        <label>{placeholder}</label>
        <input type="text" placeholder={placeholder} className="inputs" />
      </div>
    </>
  );
};

export default Input;
