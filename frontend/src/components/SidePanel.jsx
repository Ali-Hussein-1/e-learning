import React from "react";
import SidePanelCards from "./SidePanelCards";
import Button from "./Button";

const SidePanel = () => {
  return (
    <>
      <div className="container">
        <div className="sidepanel">
          <h1>ADMIN</h1>
          <SidePanelCards data={"Instructors"} />
          <SidePanelCards data={"Students"} />
          <SidePanelCards data={"Courses"} />
        </div>
        <div className="box container">
          <div>
            <Button />
          </div>
          <div className="box"></div>;
        </div>
      </div>
    </>
  );
};

export default SidePanel;
