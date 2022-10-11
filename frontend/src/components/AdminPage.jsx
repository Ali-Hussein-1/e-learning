import React from "react";
import SidePanelCards from "./SidePanelCards";
import Button from "./Button";

const AdminPage = () => {
  return (
    <>
      <div className="container">
        <div className="sidepanel">
          <h1>ADMIN</h1>
          <SidePanelCards data={"Instructors"} />
          <SidePanelCards data={"Students"} />
          <SidePanelCards data={"Courses"} />
        </div>
        <div className="box-container">
          <div className="btn-container">
            <Button text={"Add"} />
            <Button text={"Edit"} />
          </div>
          <div className="info-container">
            <div>NAME</div>
            <div>EMAIL</div>
            <div>PASSWORD</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
