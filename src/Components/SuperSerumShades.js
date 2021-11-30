import React, { useState } from "react";
import "./SuperSerumShades.css";

const SuperSerumShades = ({
  shade,
  id,
  outlineActive,
  selectedShade,
  setSelectedShade,
  data,
}) => {
  function clickHandler(e) {
    console.log(data);
    setSelectedShade(data);
  }
  return (
    <div
      id={id}
      onClick={clickHandler}
      className={`circle ${shade} ${
        selectedShade.id === data.id ? "circle-selected" : ""
      }`}
    ></div>
  );
};

export default SuperSerumShades;
