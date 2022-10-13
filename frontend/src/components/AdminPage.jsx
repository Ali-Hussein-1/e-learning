import React from "react";
import SidePanelCards from "./SidePanelCards";
import Button from "./Button";
import { useState } from "react";
import AddUser from "./AddUser";
import EditPage from "./EditPage";

const AdminPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

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
            <Button
              text={"Add"}
              onClick={() => {
                setShowForm(!showForm);
              }}
            />
            <Button
              text={"Edit"}
              onClick={() => {
                setShowEdit(!showEdit);
              }}
            />
          </div>
          <div className="info-container">
            <div>NAME</div>
            <div>EMAIL</div>
            <div>PASSWORD</div>
          </div>
          <div>{showForm && <AddUser />}</div>
          <div>{showEdit && <EditPage />}</div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
