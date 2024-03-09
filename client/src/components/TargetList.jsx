import React, { useContext } from "react";
import "../index.css";
import { targetContext } from "./AnimeMap"; // Import the context

import "../styles/TargetList.css";

function TargetList() {
  // useContext shit
  const {
    listXPosition,
    listYPosition,
    targetList,
    xPosition,
    yPosition,
    menu,
    setMenu,
    setTargetList,
  } = useContext(targetContext);
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
    const currentObj = targetList.findIndex((obj) => obj.name === data.name);
    const targetListCopy = [...targetList];
    targetListCopy[currentObj] = data;
    setTargetList(targetListCopy);
    setMenu(!menu);
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
      {targetList.map((target, index) =>
        !target.status ? (
          <div
            key={index}
            className="listBox"
            onClick={() => handleTarget(target)}
          >
            <img src={target.image} className="listBoxImg" alt=""></img>
            <p>{target.name}</p>
          </div>
        ) : null
      )}
    </div>
  );
}

export default TargetList;
