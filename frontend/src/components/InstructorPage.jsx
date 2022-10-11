import React from "react";
import SidePanelCards from "./SidePanelCards";
import Button from "./Button";

const InstructorPage = () => {
  return (
    <>
      <div className="container">
        <div className="sidepanel">
          <h1>ADMIN</h1>
          <SidePanelCards data={"Assignments"} />
          <SidePanelCards data={"Announcements"} />
          <SidePanelCards data={"Students"} />
        </div>
        <div className="box-container">
          <div className="btn-container">
            <Button text={"Add"} />
          </div>
          <div className="info-container">
            <div>ID</div>
            <div>TEXT</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorPage;
