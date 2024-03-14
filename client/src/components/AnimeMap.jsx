import { useEffect, useState, useContext, createContext } from "react";
import "../index.css";
import "../styles/AnimeMap.css";
import TargetCore from "./TargetCore.jsx";
import TargetList from "./TargetList.jsx";
const targetContext = createContext(null);
function AnimeMap() {
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
  //targetList images
  const [targetList, setTargetList] = useState(null);
  useEffect(() => {
    fetchTargetImages();
  }, []);

  function fetchTargetImages() {
    fetch("http://localhost:3000/fetchTargetImages")
      .then((res) => {
        return res.json();
      })
      .then((data) => setTargetList(data));
  }

  function handleGame(event) {
    setMenu(!menu);
    handlePosition(event);
  }

  const handlePosition = (e) => {
    let xPositioning = e.clientX + window.scrollX;
    let yPositioning = e.clientY + window.scrollY;
    let targetCordX = (e.clientX / window.innerWidth) * 100;
    let targetCordY = (e.clientY / window.innerHeight) * 100;
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
          targetList,
          targetCoreX,
          targetCoreY,
          cordX,
          cordY,
          menu,
          setMenu,
          setTargetList,
        }}
      >
        <img
          src="./images/midnight.png"
          alt=""
          className="Anime-Map"
          onClick={handleGame}
        ></img>
        {menu && <TargetCore />}
        {menu && <TargetList />}
      </targetContext.Provider>
    </>
  );
}

export { AnimeMap, targetContext };
