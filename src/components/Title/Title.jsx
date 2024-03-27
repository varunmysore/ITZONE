import React from "react";
import "./Title.css";

const Title = ({ sub, main }) => {
  return (
    <div className="heading">
      <p>{sub}</p>
      <h2>{main}</h2>
    </div>
  );
};

export default Title;
