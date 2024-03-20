import { useContext } from "react";
import "../index.css";
import "../styles/TargetCore.css";
import { targetContext } from "./Midnight.jsx";
function TargetCore() {
  const { targetCoreX, targetCoreY } = useContext(targetContext);
  return (
    <div
      className="targetCircle"
      style={{
        //-41 is for styling purposes
        left: `${targetCoreX - 41}px`,
        top: `${targetCoreY - 41}px`,
      }}
    >
      +
    </div>
  );
}

export default TargetCore;
