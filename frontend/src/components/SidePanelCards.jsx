import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";

const SidePanelCards = ({ data }) => {
  return (
    <div className="sidepanelcards">
      <div>
        <FaChalkboardTeacher />
      </div>
      <div>{data}</div>
    </div>
  );
};

export default SidePanelCards;
