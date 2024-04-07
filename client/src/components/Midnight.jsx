import { useEffect, useState, createContext } from "react";
import "../index.css";
import "../styles/Midnight.css";
import TargetCore from "./TargetCore.jsx";

import TargetStatus from "./TargetStatus.jsx";
import Header from "./Header.jsx";
import SubmitData from "./SubmitData.jsx";
import { useParams } from "react-router-dom";

const targetContext = createContext(null);
function Midnight() {
  const { Map } = useParams();
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
    console.log(Map, "adadawdwa");
    return () => clearInterval(id);
  }, []); // eslint-disable-line

  useEffect(() => {
    if (targetData !== null && checkAllTargets()) {
      setScoreboard(true);
    }
  }, [targetData]); // eslint-disable-line

  function fetchTargetImages() {
    fetch(`https://social-ants-production.up.railway.app/${Map}Targets`)
      .then((res) => {
        return res.json();
      })
      .then((data) => setTargetData(data));
  }
  function checkAllTargets() {
    const checkAllTargets = targetData.every((obj) => {
      return true;
    });
    return checkAllTargets;
  }

  

  function handleGame(event) {
    setMenu(!menu);
    handlePosition(event);
  }

  const handlePosition = (e) => {
    let midnight = document.querySelector(".map-image");
    let xPositioning = e.clientX + window.scrollX;
    let yPositioning = e.clientY + window.scrollY;

    let containerWidth = midnight.clientWidth;
    let containerHeight = midnight.clientHeight;
    let targetCordX = (xPositioning / containerWidth) * 100;
    let targetCordY = (yPositioning / containerHeight) * 100;

    console.log(targetCordX, "X");
    console.log(targetCordY, "Y");
    setTargetCoreXPosition(xPositioning);
    setTargetCoreYPosition(yPositioning);
    setCordX(targetCordX);
    setCordY(targetCordY);
    setTargetListXPosition(xPositioning);
    if (targetCordY > 86.31636562671045) {
      setTargetListYPosition(yPositioning);
    } else {
      setTargetListYPosition(yPositioning);
    }
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
          time,
          setTime,
          intervalId,
          setIntervalId,
          Map,
        }}
      >
        <Header />
        {targetStat && <TargetStatus />}
        <img
          src={`./images/${Map}.PNG`}
          alt=""
          className="map-image"
          onClick={handleGame}
        ></img>

        {menu && <TargetCore />}

        {scoreboard && <SubmitData />}
      </targetContext.Provider>
    </>
  );
}

export { Midnight, targetContext };
