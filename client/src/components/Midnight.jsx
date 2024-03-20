import { useEffect, useState, useContext, createContext } from "react";
import "../index.css";
import "../styles/Midnight.css";
import TargetCore from "./TargetCore.jsx";
import TargetList from "./TargetList.jsx";
import TargetStatus from "./TargetStatus.jsx";
import Header from "./Header.jsx";
import SubmitData from "./SubmitData.jsx";
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

  const [scoreboard, setScoreboard] = useState(false);
  useEffect(() => {
    fetchTargetImages();
  }, []);

  function fetchTargetImages() {
    fetch("http://localhost:3000/fetchTargetImages")
      .then((res) => {
        return res.json();
      })
      .then((data) => setTargetData(data));
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
    //TOP LEFT 39X 57Y
    //BOTTOM RIGHT 44X 64Y
    console.log(targetCordX, "X");
    console.log(targetCordY, "Y");
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
        {menu && <TargetCore />}
        {menu && <TargetList />}
        {!scoreboard && <SubmitData />}
      </targetContext.Provider>
    </>
  );
}

export { Midnight, targetContext };
