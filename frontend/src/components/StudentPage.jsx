import React from "react";
import SidePanelCards from "./SidePanelCards";
import Button from "./Button";
import { useState } from "react";

const StudentPage = () => {
  return (
    <>
      <div className="container">
        <div className="sidepanel">
          <h1>STUDENTS</h1>
          <SidePanelCards data={"Assignments"} />
          <SidePanelCards data={"Courses"} />
        </div>
        <div className="box-container">
          <div className="info-container">
            <div>ID</div>
            <div>TEXT</div>
          </div>
          {/* <div>{showForm && <AddUser />}</div> */}
        </div>
      </div>
    </>
  );
};

export default StudentPage;
