import { useEffect, useContext } from "react";
import "../index.css";
import "../styles/SubmitData.css";
import { targetContext } from "./Midnight";
import { useParams } from "react-router-dom";

function SubmitData() {
  const { Map } = useParams();
  const { time, setIntervalId, intervalId } = useContext(targetContext);

  useEffect(() => {
    pauseOrResume();
    addBackgroundEffect();
  }, []); // eslint-disable-line

  function addBackgroundEffect() {
    let img = document.querySelector(".map-image");
    img.style.background = "white";
  }

  function handleScoreboard() {
    const usernameInput = document.querySelector(".submit-input").value;

    console.log(Map);
    fetch(`https://social-ants-production.up.railway.app/${Map}Leaderboard`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameInput,
        seconds: time.sec,
        minutes: time.min,
        hours: time.hr,
        mapName: Map,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        window.location.href = data.home;
      });
  }

  function pauseOrResume() {
    clearInterval(intervalId);
    setIntervalId("");
  }
  return (
    <div className="submit-container">
      <h1>You got</h1>
      <h2>{`${time.hr < 10 ? 0 : ""}${time.hr} : ${time.min < 10 ? 0 : ""}${
        time.min
      } : ${time.sec < 10 ? 0 : ""}${time.sec}`}</h2>
      <h3>Enter Name</h3>
      <input
        type="text"
        className="submit-input"
        name="username"
        required
      ></input>
      <button className="submit-button" onClick={handleScoreboard}>
        Submit
      </button>
    </div>
  );
}

export default SubmitData;
