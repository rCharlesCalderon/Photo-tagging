import React, { useContext, useEffect } from "react";
import "../index.css";
import { targetContext } from "./Midnight"; // Import the context

import "../styles/TargetList.css";

function TargetList() {
  // useContext shit
  const {
    targetListX,
    targetListY,
    targetData,
    cordX,
    cordY,
    menu,
    setMenu,
    setTargetStatus,
    setTargetData,
  } = useContext(targetContext);

  function handleTarget(target) {
    const targetData = {
      ...target,
      x: cordX,
      y: cordY,
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
    const currentObj = targetData.findIndex((obj) => obj.name === data.name);
    const targetListCopy = [...targetData];
    targetListCopy[currentObj] = data;
    //check the data to see if status is true then setTargetStaus here
    setTargetData(targetListCopy);

    setMenu(!menu);

    if (data.status === true) {
      setTargetStatus(data.name);
    } else {
      setTargetStatus("Try Again");
    }
  }
  return (
    <div
      className="targetList"
      style={{
        //+10 is just for styling purposes
        top: `${targetListY + 10}px`,
        left: `${targetListX + 10}px`,
      }}
    >
      {targetData.map((target, index) =>
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
