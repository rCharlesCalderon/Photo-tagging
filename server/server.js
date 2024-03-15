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
  //Based off VH and VW of img X,Y
  console.log(req.body);

  if (
    req.body.y > 11.000552791597567 &&
    req.body.y < 14.870093974571585 &&
    req.body.x > 39.31436907366886 &&
    req.body.x < 44.63894967177243
  ) {
    req.body.status = true;
  }
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("server started 3000");
});
