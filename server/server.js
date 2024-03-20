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
    req.body.y > 14.216478190630049 &&
    req.body.y < 17.932148626817447 &&
    req.body.x > 39.31436907366886 &&
    req.body.x < 44.63894967177243
  ) {
    req.body.status = true;
  }
  res.json(req.body);
});

app.post("/Cow", (req, res) => {
  //Based off VH and VW of img X,Y
  console.log(req.body);

  if (
    req.body.y > 18.12297734627832 &&
    req.body.y < 19.902912621359224 &&
    req.body.x > 61.94690265486725 &&
    req.body.x < 63.93805309734514
  ) {
    req.body.status = true;
  }
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("server started 3000");
});
