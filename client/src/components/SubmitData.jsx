import { useEffect, useContext } from "react";
import "../index.css";
import "../styles/SubmitData.css";
import { targetContext } from "./Midnight";

function SubmitData() {
  const { targetData, scoreboard, setScoreboard, menu } =
    useContext(targetContext);
  useEffect(() => {
    console.log("slit");
  }, []);

  function handleScoreboarrd() {}
  return (
    <div className="submit-container">
      <h1>You got</h1>
      <h1>Timer goes here</h1>
      <button onClick={handleScoreboarrd}></button>
    </div>
  );
}

export default SubmitData;
