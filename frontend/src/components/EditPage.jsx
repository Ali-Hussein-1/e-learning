import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

const EditPage = () => {
  return (
    <div className="add-container">
      <div>Edit Page</div>
      <Input placeholder={"name"} />
      <Input placeholder={"password"} />
      <Input type="password" placeholder={"Instructor or student"} />
      <Button text={"Edit User"} />
    </div>
  );
};

export default EditPage;
