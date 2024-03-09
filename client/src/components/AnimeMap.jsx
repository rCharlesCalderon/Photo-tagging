import { useEffect, useState, useContext, createContext } from "react";
import "../index.css";
import "../styles/AnimeMap.css";
import TargetCore from "./TargetCore.jsx";
import TargetList from "./TargetList.jsx";
const targetContext = createContext(null);
function AnimeMap() {
  //USE JSX TO CONDITIONALLY RENDER THE TAGETCORE AND BOX
  //ADD THE IMAGES INTO THE BOX, USESTATE UPDATE THE PICTURES LATER

  const [menu, setMenu] = useState(false);
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const [listXPosition, setXListPosition] = useState(0);
  const [listYPosition, setYListPosition] = useState(0);
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
    //-40-41 is for centering the TargetCore on the cursor
    let xPositioning = e.clientX + window.scrollX;
    console.log(xPositioning, "Correct X");
    let yPositioning = e.clientY + window.scrollY;
    console.log(yPositioning, "Correct Y");
    let listPositionX = xPositioning;
    let listPositionY = yPositioning;
    setXPosition(xPositioning);
    setYPosition(yPositioning);
    setXListPosition(listPositionX);
    setYListPosition(listPositionY);
  };

  return (
    <>
      <targetContext.Provider
        value={{
          listXPosition,
          listYPosition,
          targetList,
          xPosition,
          yPosition,
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
