const express = require("express");
const app = express();
const cors = require("cors");

// Allow requests from http://localhost:3001
app.use(cors({ origin: "http://localhost:3001" }));
app.use(express.json());
app.get("/Home", (req, res) => {
  const images = ["../images/Anime.jpg", "../images/midnight.png"];
  res.json({ imageList: images });
});

app.get("/fetchTargetImages", (req, res) => {
  const midnightTargets = [
    {
      name: "Ghost",
      image: "../images/ghost.PNG",
      status: false,
    },
    {
      name: "Cow",
      image: "../images/Cow.PNG",
      status: false,
    },
  ];
  res.json(midnightTargets);
});

app.post("/Ghost", (req, res) => {
  //x:524  y:193 Y TOP LEFT
  //x:600 y:264 BOTTOM RIGHT
  for (let x = 524; x < 600; x++) {
    if (req.body.x === x) {
      req.body.status = true;
      break;
    }
  }
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("server started 3000");
});
