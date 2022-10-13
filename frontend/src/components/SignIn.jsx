import React from "react";
import Button from "./Button";
import Input from "./Input";

const SignIn = () => {
  return (
    <>
      <div className="signin">
        <div className="signin-container">
          <h1>E-Learning</h1>
          <Input placeholder={"email"} />
          <Input type="password" placeholder={"password"} />
          <Button text={"SignIn"} />
        </div>
      </div>
    </>
  );
};

export default SignIn;
