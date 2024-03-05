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
        left: `${xPosition}px`,
        top: `${yPosition}px`,
      }}
    >
      +
    </div>
  );
}

export default TargetCore;
