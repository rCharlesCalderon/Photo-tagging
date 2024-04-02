import { useContext, useState } from "react";
import "../styles/Header.css";
import { targetContext } from "./Midnight";
import { Link } from "react-router-dom";
function Header() {
  const { targetData, time } = useContext(targetContext);

  return (
    <div className="header">
      <Link to="/">
        <span className="title">Find the Things!</span>{" "}
      </Link>
      <h2>{`${time.hr < 10 ? 0 : ""}${time.hr} : ${time.min < 10 ? 0 : ""}${
        time.min
      } : ${time.sec < 10 ? 0 : ""}${time.sec}`}</h2>

      <div className="thing-tracker">
        {targetData &&
          targetData.map((target, index) =>
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
                <img src={target.image} className="thing-img" alt="" />
                <p>{target.name}</p>
              </div>
            )
          )}
      </div>
    </div>
  );
}

export default Header;
