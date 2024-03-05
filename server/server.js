const express = require("express");
const app = express();
const cors = require("cors");

// Allow requests from http://localhost:3001
app.use(cors({ origin: "http://localhost:3001" }));

app.get("/Home", (req, res) => {
  const images = ["../images/Anime.jpg", "../images/midnight.png"];
  res.json({ imageList: images });
});

app.get("/fetchTargetImages", (req, res) => {
  const midnightTargets = [
    {
      name: "Ghost",
      image: "../images/ghost.PNG",
    },
    {
      name: "Cow",
      image: "../images/Cow.PNG",
    },
  ];
  res.json(midnightTargets);
});

app.listen(3000, () => {
  console.log("server started 3000");
});
