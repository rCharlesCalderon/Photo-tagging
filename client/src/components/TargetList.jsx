import React, { useContext } from "react";
import "../index.css";
import { targetContext } from "./AnimeMap"; // Import the context

import "../styles/TargetList.css";

function TargetList() {
  // useContext shit
  const {
    targetListX,
    targetListY,
    targetList,
    cordX,
    cordY,
    menu,
    setMenu,
    setTargetList,
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
    const currentObj = targetList.findIndex((obj) => obj.name === data.name);
    const targetListCopy = [...targetList];
    targetListCopy[currentObj] = data;

    setTargetList(targetListCopy);
    console.log(targetList);
    setMenu(!menu);
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
