import { useContext } from "react";
import "../index.css";
import "../styles/TargetCore.css";
import { targetContext } from "./Midnight.jsx";
import TargetList from "./TargetList.jsx";

function TargetCore() {
  const { targetCoreX, targetCoreY } = useContext(targetContext);
  return (
    <div
      style={{
        left: `${targetCoreX - 41}px`,
        top: `${targetCoreY - 41}px`,
        width: `100px`,
        position: "absolute",
        zIndex: 9999,
      }}
    >
      <TargetList />
      <div className="targetCircle">+</div>
    </div>
  );
}

export default TargetCore;
