import { useContext, useEffect, useState } from "react";
import { LeaderboardContext } from "./Maps";
import "../styles/Leaderboard.css";
function Leaderboard() {
  const { mapIndex } = useContext(LeaderboardContext);
  const [scoreData, setScoreData] = useState(null);
  useEffect(() => {
    if (mapIndex !== null) {
      handleLeaderboardData();
    }
  }, [mapIndex]); // eslint-disable-line

  function handleLeaderboardData() {
    fetch(`https://social-ants-production.up.railway.app/Scores${mapIndex}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setScoreData(data));
  }
  return (
    <div className="Leaderboard-container">
      {scoreData && <p className="map-title">{scoreData.mapName}</p>}
      {scoreData && (
        <table className="table-container">
          <tbody>
            <tr className="table">
              <th>Place</th>
              <th>Name</th>
              <th>Time</th>
              <th>Date</th>
            </tr>

            {scoreData &&
              scoreData.mapData.map((score, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <th>{score.name}</th>
                    <th>
                      {`${score.hours < 10 ? 0 : ""}${score.hours} : ${
                        score.minutes < 10 ? 0 : ""
                      }${score.minutes} : ${score.seconds < 10 ? 0 : ""}${
                        score.seconds
                      }`}
                    </th>
                    <th>{score.date}</th>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Leaderboard;
