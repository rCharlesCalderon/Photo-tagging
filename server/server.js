const express = require("express");
const app = express();
const cors = require("cors");
const submitSchema = require("./controller/SubmitDataSchema.js");
const mongoose = require("mongoose");

const { ObjectId } = require("mongodb");
const dotenv = require("dotenv").config();
const userName = process.env.MONGODB_USER_KEY;
const password = process.env.MONGODB_PASSWORD;
mongoose.connect(
  `mongodb+srv://Rubcal123:Rubcal123@inventory.smc01ik.mongodb.net/?retryWrites=true&w=majority&appName=Inventory`
);
const db = mongoose.connection.useDb("Photo-Tagging");
// Allow requests from http://localhost:3001
app.use(cors({ origin: "http://localhost:3001" }));
app.use(express.json());
app.get("/Home", (req, res) => {
  const images = [
    {
      imageSrc: "../images/Anime.png",
      name: "Idk name later",
      mapURL: "Anime",
    },
    {
      imageSrc: "../images/midnight.png",
      name: "Midnight Metropolis",
      mapURL: "Midnight",
    },
  ];

  res.json({ imageList: images });
});

app.get("/MidnightTargets", (req, res) => {
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
    {
      name: "Avalon",
      image: "../images/Avalon.PNG",
      status: false,
    },
    {
      name: "Goblin",
      image: "../images/Goblin.PNG",
      status: false,
    },
    {
      name: "Samurai",
      image: "../images/Samurai.PNG",
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

app.post("/Avalon", (req, res) => {
  //Based off VH and VW of img X,Y
  console.log(req.body);

  if (
    req.body.y > 82.20064724919094 &&
    req.body.y < 85.11326860841424 &&
    req.body.x > 29.867256637168143 &&
    req.body.x < 32.52212389380531
  ) {
    req.body.status = true;
  }
  res.json(req.body);
});

app.post("/Goblin", (req, res) => {
  //Based off VH and VW of img X,Y
  console.log(req.body);

  if (
    req.body.y > 88.7646161667514 &&
    req.body.y < 91.25571936959838 &&
    req.body.x > 81.79291174426685 &&
    req.body.x < 84.01667824878388
  ) {
    req.body.status = true;
  }
  res.json(req.body);
});
app.post("/Samurai", (req, res) => {
  //Based off VH and VW of img X,Y
  console.log(req.body);

  if (
    req.body.y > 59.32892730045754 &&
    req.body.y < 63.599389933909514 &&
    req.body.x > 41.76511466296039 &&
    req.body.x < 44.12786657400973
  ) {
    req.body.status = true;
  }
  res.json(req.body);
});

app.post("/MidnightLeaderboard", async (req, res) => {
  const mapName = req.body.mapName;
  const scoreboardModel = db.model(mapName, submitSchema, mapName);
  const scoreboard = new scoreboardModel({
    name: req.body.username,
    seconds: req.body.seconds,
    minutes: req.body.minutes,
    hours: req.body.hours,
  });

  await scoreboard.save();

  res.json({ home: "/" });
});
//need a scores0
app.get("/Scores1", async (req, res) => {
  const data = await db.collection("Midnight").find().toArray();
  const sortData = data.sort((a, b) => a.seconds - b.seconds);
  console.log(data);
  res.json({ mapName: "Midnight Metropolis", mapData: sortData });
});



app.listen(3000, () => {
  console.log("server started 3000");
});
