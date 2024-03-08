import React, { useContext } from "react";
import "../index.css";
import { targetContext } from "./AnimeMap"; // Import the context

import "../styles/TargetList.css";
import { func } from "prop-types";

function TargetList() {
  // useContext shit
  const { listXPosition, listYPosition, targetList, xPosition, yPosition } =
    useContext(targetContext);
  function handleTarget(target) {
    const targetData = {
      ...target,
      x: xPosition,
      y: yPosition,
    };
    fetch(`http://localhost:3000/${target.name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(targetData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => handleTargetValidation(data));
  }

  function handleTargetValidation(data) {
    console.log(data);
  }
  return (
    <div
      className="targetList"
      style={{
        //+10 is just for styling purposes
        top: `${listYPosition + 10}px`,
        left: `${listXPosition + 10}px`,
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
