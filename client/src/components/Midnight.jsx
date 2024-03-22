import { useEffect, useState, createContext } from "react";
import "../index.css";
import "../styles/Midnight.css";
import TargetCore from "./TargetCore.jsx";
import TargetList from "./TargetList.jsx";
import TargetStatus from "./TargetStatus.jsx";
import Header from "./Header.jsx";
import SubmitData from "./SubmitData.jsx";
import { func } from "prop-types";
const targetContext = createContext(null);
function Midnight() {
  const [menu, setMenu] = useState(false);
  //targetCore
  const [targetCoreX, setTargetCoreXPosition] = useState(0);
  const [targetCoreY, setTargetCoreYPosition] = useState(0);
  //TargetList
  const [targetListX, setTargetListXPosition] = useState(0);
  const [targetListY, setTargetListYPosition] = useState(0);
  //X Y coordinates
  const [cordX, setCordX] = useState(0);
  const [cordY, setCordY] = useState(0);
  //targetData is the data from backend in the fetchTargetImages
  const [targetData, setTargetData] = useState(null);

  const [targetStat, setTargetStatus] = useState(false);

  const [scoreboard, setScoreboard] = useState(null);

  const [time, setTime] = useState({
    sec: 0,
    min: 0,
    hr: 0,
  });

  const [intervalId, setIntervalId] = useState();

  const updateTimer = () => {
    setTime((prev) => {
      let newTime = { ...prev };
      if (newTime.sec < 59) newTime.sec += 1;
      else {
        newTime.min += 1;
        newTime.sec = 0;
      }
      if (newTime.min === 60) {
        newTime.min = 0;
        newTime.hr += 1;
      }
      return newTime;
    });
  };

  useEffect(() => {
    fetchTargetImages();
    let id = setInterval(updateTimer, 1000);
    setIntervalId(id);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (targetData !== null && checkAllTargets()) {
      setScoreboard(true);
    }
  }, [targetData]);

  function fetchTargetImages() {
    fetch("http://localhost:3000/fetchTargetImages")
      .then((res) => {
        return res.json();
      })
      .then((data) => setTargetData(data));
  }
  function checkAllTargets() {
    const checkAllTargets = targetData.every((obj) => {
      if (obj.status) {
        return true;
      }
    });
    return checkAllTargets;
  }
  function handleGame(event) {
    setMenu(!menu);
    handlePosition(event);
  }

  const handlePosition = (e) => {
    let midnight = document.querySelector(".midnight");
    let xPositioning = e.clientX + window.scrollX;
    let yPositioning = e.clientY + window.scrollY;

    let containerWidth = midnight.clientWidth;
    let containerHeight = midnight.clientHeight;
    let targetCordX = (xPositioning / containerWidth) * 100;
    let targetCordY = (yPositioning / containerHeight) * 100;
    setTargetCoreXPosition(xPositioning);
    setTargetCoreYPosition(yPositioning);
    setTargetListXPosition(xPositioning);
    setTargetListYPosition(yPositioning);
    setCordX(targetCordX);
    setCordY(targetCordY);
  };

  return (
    <>
      <targetContext.Provider
        value={{
          targetListX,
          targetListY,
          targetData,
          setTargetData,
          targetCoreX,
          targetCoreY,
          cordX,
          cordY,
          targetStat,
          setTargetStatus,
          menu,
          setMenu,
          scoreboard,
          setScoreboard,
        }}
      >
        <Header />
        {targetStat && <TargetStatus />}
        <img
          src="./images/midnight.png"
          alt=""
          className="midnight"
          onClick={handleGame}
        ></img>
        <h2>{`${time.hr < 10 ? 0 : ""}${time.hr} : ${time.min < 10 ? 0 : ""}${
          time.min
        } : ${time.sec < 10 ? 0 : ""}${time.sec}`}</h2>
        {menu && <TargetCore />}
        {menu && <TargetList />}
        {scoreboard && <SubmitData />}
      </targetContext.Provider>
    </>
  );
}

export { Midnight, targetContext };
