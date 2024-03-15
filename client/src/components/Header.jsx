import { useContext } from "react";
import "../styles/Header.css";
import { targetContext } from "./Midnight";
function Header() {
  const { targetList } = useContext(targetContext);
  return (
    <div className="header">
      <span>Title goes here</span>
      <span>TIMER GOES HERE</span>
      <div className="thing-tracker">
        {targetList &&
          targetList.map((target, index) =>
            target.status ? (
              <div key={index} className="thing-list">
                <img
                  src={target.image}
                  className="listBoxImg thing-found"
                  alt=""
                />
                <p className="thing-found">{target.name}</p>
              </div>
            ) : (
              <div key={index} className="thing-list">
                <img src={target.image} className="listBoxImg" alt="" />
                <p>{target.name}</p>
              </div>
            )
          )}
      </div>
    </div>
  );
}

export default Header;
