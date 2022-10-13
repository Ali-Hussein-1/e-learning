import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

const AddUser = () => {
  return (
    <div className="add-container">
      <div>Add Page</div>
      <Input type={"text"} placeholder={"name"} />
      <Input type={"text"} placeholder={"email"} />
      <Input type={"password"} placeholder={"password"} />
      <Input type={"text"} placeholder={"Instructor or student"} />
      <Button text={"Add User"} />
    </div>
  );
};

export default AddUser;
