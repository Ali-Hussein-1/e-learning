import React from "react";
import SidePanelCards from "./SidePanelCards";
import Button from "./Button";
import { useState } from "react";
import AddUser from "./AddUser";

const InstructorPage = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className="container">
        <div className="sidepanel">
          <h1>INSTRUCTOR</h1>
          <SidePanelCards data={"Assignments"} />
          <SidePanelCards data={"Announcements"} />
          <SidePanelCards data={"Students"} />
        </div>
        <div className="box-container">
          <div className="btn-container">
            <Button
              text={"Add"}
              onClick={() => {
                setShowForm(!showForm);
              }}
            />
          </div>
          <div className="info-container">
            <div>ID</div>
            <div>TEXT</div>
          </div>
          <div>{showForm && <AddUser />}</div>
        </div>
      </div>
    </>
  );
};

export default InstructorPage;
