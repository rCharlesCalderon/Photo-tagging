import { useContext, useEffect, useState } from "react";
import "../index.css";
import "../styles/TargetStatus.css";
import { targetContext } from "./Midnight";

function TargetStatus() {
  const { targetStat, setTargetStatus } = useContext(targetContext);

  useEffect(() => {
    setTimeout(() => {
      setTargetStatus(null);
    }, 3000);
  }, [targetStat]);

  return (
    <div className="target-status">
      <p
        className={
          "target-status " +
          (targetStat === "Try Again" ? "target-missed" : "target-found")
        }
      >
        {targetStat}
      </p>
    </div>
  );
}

export default TargetStatus;
