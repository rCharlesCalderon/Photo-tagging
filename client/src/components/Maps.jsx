import "../styles/Maps.css";
import { useState, useEffect, createContext } from "react";
import { Link } from "react-router-dom";
import LeaderBoardHeader from "./LeaderboardHeader";
import Leaderboard from "./Leaderboard";
const LeaderboardContext = createContext(null);
function Maps() {
  const [images, setImages] = useState(null);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [mapIndex, setMapIndex] = useState(false);
  useEffect(() => {
    fetch("https://social-ants-production.up.railway.app/Home", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <LeaderboardContext.Provider
      value={{
        showLeaderboard,
        setShowLeaderboard,
        mapIndex,
        setMapIndex,
      }}
    >
      <div className="Map-container">
        <LeaderBoardHeader />
        <span className="Maps-title">Games</span>
        <div className="Maps">
          {images &&
            images.imageList.map((image, index) => (
              <div
                className={`image-box ${mapIndex === index ? "glow" : ""}`}
                key={index}
                onClick={() => {
                  setMapIndex(index);
                }}
              >
                <img src={image.imageSrc} alt="" className="image"></img>
                <span>{image.name}</span>
                {console.log(image.mapURL)}
                <Link to={`/${image.mapURL}`} className="map-btn">
                  Start Game
                </Link>
              </div>
            ))}
        </div>
        {showLeaderboard && <Leaderboard />}
      </div>
    </LeaderboardContext.Provider>
  );
}

export { Maps, LeaderboardContext };
