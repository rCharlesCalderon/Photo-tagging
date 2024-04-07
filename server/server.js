const express = require("express");
const app = express();
const cors = require("cors");
const submitSchema = require("./controller/SubmitDataSchema.js");
const mongoose = require("mongoose");

const { ObjectId } = require("mongodb");
const res = require("express/lib/response.js");
const dotenv = require("dotenv").config();
const userName = process.env.MONGODB_USER_KEY;
const password = process.env.MONGODB_PASSWORD;
mongoose.connect(
  `mongodb+srv://Rubcal123:Rubcal123@inventory.smc01ik.mongodb.net/?retryWrites=true&w=majority&appName=Inventory`
);
const db = mongoose.connection.useDb("Photo-Tagging");
// Allow requests from http://localhost:3001
app.use(cors({ origin: "*" }));
app.use(express.json());
app.get("/Home", (req, res) => {
  const images = [
    {
      imageSrc: "../images/Jungle.PNG",
      name: "Concrete Jungle",
      mapURL: "Jungle",
    },
    {
      imageSrc: "../images/midnight.png",
      name: "Midnight Metropolis",
      mapURL: "Midnight",
    },
    {
      imageSrc: "../images/Creek.png",
      name: "Crumbling Creek",
      mapURL: "Creek",
    },
  ];

  res.json({ imageList: images });
});

app.get("/About", (req, res) => {
  res.json({ test: "awdadw" });
});
app.get("/MidnightTargets", (req, res) => {
  const Targets = [
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
  res.json(Targets);
});

app.get("/JungleTargets", (req, res) => {
  const Targets = [
    {
      name: "Box",
      image: "../images/Box.PNG",
      status: false,
    },
    {
      name: "Robot",
      image: "../images/Robot.PNG",
      status: false,
    },
    {
      name: "Grant",
      image: "../images/Grant.PNG",
      status: false,
    },
    {
      name: "Monkey",
      image: "../images/Monkey.PNG",
      status: false,
    },
    {
      name: "Seagull",
      image: "../images/Seagull.PNG",
      status: false,
    },
  ];
  res.json(Targets);
});
app.get("/CreekTargets", (req, res) => {
  const Targets = [
    {
      name: "Pants",
      image: "../images/Pants.PNG",
      status: false,
    },
    {
      name: "Crab",
      image: "../images/Crab.PNG",
      status: false,
    },
    {
      name: "Fish",
      image: "../images/ManFish.PNG",
      status: false,
    },
    {
      name: "Goat",
      image: "../images/Goat.PNG",
      status: false,
    },
    {
      name: "Marc",
      image: "../images/Marc.PNG",
      status: false,
    },
  ];
  res.json(Targets);
});

app.post("/Ghost", (req, res) => {
  //Midnight Metropolis
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
  //Midnight Metropolis
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
  //Midnight Metropolis
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
  //Midnight Metropolis
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
  //Midnight Metropolis
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

app.post("/Box", (req, res) => {
  //Concrete Jungle
  console.log(req.body);

  if (
    req.body.y > 97.25749111223972 &&
    req.body.y < 99.4413407821229 &&
    req.body.x > 18.485059068797778 &&
    req.body.x < 21.403752605976372
  ) {
    req.body.status = true;
  }
  res.json(req.body);
});

app.post("/Robot", (req, res) => {
  //Concrete Jungle
  console.log(req.body);

  if (
    req.body.y > 6.80548501777552 &&
    req.body.y < 13.357034027425088 &&
    req.body.x > 5.837387074357193 &&
    req.body.x < 10.701876302988186
  ) {
    req.body.status = true;
  }
  res.json(req.body);
});

app.post("/Grant", (req, res) => {
  //Concrete Jungle
  console.log(req.body);

  if (
    req.body.y > 59.217877094972074 &&
    req.body.y < 63.128491620111724 &&
    req.body.x > 2.2932592077831826 &&
    req.body.x < 5.142460041695622
  ) {
    req.body.status = true;
  }
  res.json(req.body);
});

app.post("/Monkey", (req, res) => {
  //Concrete Jungle
  console.log(req.body);

  if (
    req.body.y > 51.29507364144236 &&
    req.body.y < 55.25647536820721 &&
    req.body.x > 72.75886031966643 &&
    req.body.x < 75.95552466990966
  ) {
    req.body.status = true;
  }
  res.json(req.body);
});

app.post("/Seagull", (req, res) => {
  //Concrete Jungle
  console.log(req.body);

  if (
    req.body.y > 29.812087353986794 &&
    req.body.y < 31.843575418994412 &&
    req.body.x > 91.93884642112579 &&
    req.body.x < 93.12022237665045
  ) {
    req.body.status = true;
  }
  res.json(req.body);
});

app.post("/Pants", (req, res) => {
  //Crumbling Creek
  console.log(req.body);

  if (
    req.body.y > 30.45045045045045 &&
    req.body.y < 34.26382047071702 &&
    req.body.x > 28.060956384655807 &&
    req.body.x < 30.373095112979502
  ) {
    req.body.status = true;
  }
  res.json(req.body);
});

app.post("/Crab", (req, res) => {
  //Crumbling Creek
  console.log(req.body);

  if (
    req.body.y > 49.315818281335524 &&
    req.body.y < 51.50519978106185 &&
    req.body.x > 70.64071370640713 &&
    req.body.x < 74.20924574209245
  ) {
    req.body.status = true;
  }
  res.json(req.body);
});

app.post("/Fish", (req, res) => {
  //Crumbling Creek
  console.log(req.body);

  if (
    req.body.y > 91.62561576354679 &&
    req.body.y < 95.51176792556103 &&
    req.body.x > 94.48499594484996 &&
    req.body.x < 96.99918896999189
  ) {
    req.body.status = true;
  }
  res.json(req.body);
});
app.post("/Goat", (req, res) => {
  //Crumbling Creek
  console.log(req.body);

  if (
    req.body.y > 38.040503557744934 &&
    req.body.y < 42.69293924466338 &&
    req.body.x > 74.77696674776966 &&
    req.body.x < 76.31792376317924
  ) {
    req.body.status = true;
  }
  res.json(req.body);
});

app.post("/Marc", (req, res) => {
  //Crumbling Creek
  console.log(req.body);

  if (
    req.body.y > 50.191570881226056 &&
    req.body.y < 54.679802955665025 &&
    req.body.x > 45.904298459042984 &&
    req.body.x < 48.661800486618006
  ) {
    req.body.status = true;
  }
  res.json(req.body);
});

app.post("/MidnightLeaderboard", async (req, res) => {
  const mapName = req.body.mapName;
  const scoreboardModel = db.model(mapName, submitSchema, mapName);
  const date = new Date().toISOString().slice(0, 10);
  const scoreboard = new scoreboardModel({
    name: req.body.username,
    seconds: req.body.seconds,
    minutes: req.body.minutes,
    hours: req.body.hours,
    date: date,
  });

  await scoreboard.save();

  res.json({ home: "/" });
});
app.post("/JungleLeaderboard", async (req, res) => {
  const mapName = req.body.mapName;
  const scoreboardModel = db.model(mapName, submitSchema, mapName);
  const date = new Date().toISOString().slice(0, 10);
  const scoreboard = new scoreboardModel({
    name: req.body.username,
    seconds: req.body.seconds,
    minutes: req.body.minutes,
    hours: req.body.hours,
    date: date,
  });

  await scoreboard.save();

  res.json({ home: "/" });
});
//need a scores0

app.post("/CreekLeaderboard", async (req, res) => {
  const mapName = req.body.mapName;
  const scoreboardModel = db.model(mapName, submitSchema, mapName);
  const date = new Date().toISOString().slice(0, 10);
  const scoreboard = new scoreboardModel({
    name: req.body.username,
    seconds: req.body.seconds,
    minutes: req.body.minutes,
    hours: req.body.hours,
    date: date,
  });

  await scoreboard.save();

  res.json({ home: "/" });
});

app.get("/Scores0", async (req, res) => {
  const data = await db.collection("Jungle").find().toArray();
  const sortData = data.sort((a, b) => a.seconds - b.seconds);
  console.log(data);
  res.json({ mapName: "Concrete Jungle", mapData: sortData });
});

app.get("/Scores1", async (req, res) => {
  const data = await db.collection("Midnight").find().toArray();
  const sortData = data.sort((a, b) => a.seconds - b.seconds);
  console.log(data);
  res.json({ mapName: "Midnight Metropolis", mapData: sortData });
});

app.get("/Scores2", async (req, res) => {
  const data = await db.collection("Creek").find().toArray();
  const sortData = data.sort((a, b) => a.seconds - b.seconds);
  console.log(data);
  res.json({ mapName: "Crumbling Creek", mapData: sortData });
});

app.listen(process.env.PORT || 3000, () => {
  res.send("welcome to the server");
});
