import React, { useContext } from "react";
import "../index.css";
import { targetContext } from "./AnimeMap"; // Import the context

import "../styles/TargetList.css";

function TargetList() {
  // Use the useContext hook to access the context values
  const { listXPosition, listYPosition, targetList } =
    useContext(targetContext);

  function handleTarget(target) {}
  return (
    <div
      className="targetList"
      style={{
        top: `${listYPosition}px`,
        left: `${listXPosition}px`,
      }}
    >
      {targetList.map((target, index) => (
        <div
          key={index}
          className="listBox"
          onClick={() => handleTarget(target)}
        >
          <img src={target.image} className="listBoxImg" alt=""></img>
          <p>{target.name}</p>
        </div>
      ))}
    </div>
  );
}

export default TargetList;
