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
  //38.98431665421957 'Target postition Xc'
  //51 56.80087051142546 'Target postition Y'
  //44.95892457057506 'Target postition Xc'
  //51 65.50598476605005 'Target postition Y'
  //Y IS HEIGHT'
  //X IS WIDTH
  console.log(req.body);
  if (req.body.y > 20.348204570184983 && req.body.y < 28.726877040261158) {
    req.body.status = true;
  }
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("server started 3000");
});
