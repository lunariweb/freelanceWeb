import React from "react";
import "../css/DefaultButton.css";

const DefaultButton = ({ title, onClick }) => {
  return (
    <div className="defaultButton" onClick={onClick}>
      <h4>{title}</h4>
    </div>
  );
};

export default DefaultButton;
