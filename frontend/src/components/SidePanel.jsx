import React from "react";
import SidePanelCards from "./SidePanelCards";

const SidePanel = () => {
  return (
    <>
      <div className="sidepanel">
        <h1>ADMIN</h1>
        <SidePanelCards data={"Instructors"} />
        <SidePanelCards data={"Students"} />
        <SidePanelCards data={"Courses"} />
      </div>
      ;
    </>
  );
};

export default SidePanel;
