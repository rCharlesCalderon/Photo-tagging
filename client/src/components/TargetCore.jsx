import { useContext } from "react";
import "../index.css";
import "../styles/TargetCore.css";
import { targetContext } from "./AnimeMap";
function TargetCore() {
  const { xPosition, yPosition } = useContext(targetContext);
  return (
    <div
      className="targetCircle"
      style={{
        //-41 is for styling purposes
        left: `${xPosition - 41}px`,
        top: `${yPosition - 41}px`,
      }}
    >
      +
    </div>
  );
}

export default TargetCore;
