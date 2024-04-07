import { useContext, useEffect } from "react";
import { LeaderboardContext } from "./Maps";
import { Link } from "react-router-dom";
import "../styles/LeaderboardHeader.css";

function LeaderBoardHeader({}) {
  const { showLeaderboard, setShowLeaderboard, setMapIndex } =
    useContext(LeaderboardContext);

  useEffect(() => {
    if (showLeaderboard !== false) {
      setMapIndex(1);
    } else {
      setMapIndex(null);
    }
  }, [showLeaderboard]); // eslint-disable-line

  return (
    <div className="leaderboard-Header">
      <Link to="/" className="leaderboard-title">
        Find The Things!
      </Link>
      <div className="leaderboard-nav">
        <span onClick={() => setShowLeaderboard(!showLeaderboard)}>
          Leaderboard
        </span>
        <Link to="https://www.srhillustration.com/">
          <span>Artwork Credit</span>
        </Link>
      </div>
    </div>
  );
}

export default LeaderBoardHeader;
