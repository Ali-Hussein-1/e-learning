import React from "react";

const Input = ({ placeholder }, { type }) => {
  return (
    <>
      <div className="input">
        <label>{placeholder}</label>
        <input type={type} placeholder={placeholder} className="inputs" />
      </div>
    </>
  );
};

export default Input;
