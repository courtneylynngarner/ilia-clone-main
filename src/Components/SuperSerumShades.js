import React, { useState } from "react";
import "./SuperSerumShades.css";

const SuperSerumShades = ({ shade, id, outlineActive }) => {
  const [outline, setOutline] = useState("");
  function clickHandler(e) {
    console.log(e.target.id);
    console.log(outlineActive);
    setOutline("circle-selected");
  }
  return (
    <div
      id={id}
      onClick={clickHandler}
      className={`circle ${shade} ${outlineActive ? outline : ""}`}
    >
      <div></div>
    </div>
  );
};

export default SuperSerumShades;
