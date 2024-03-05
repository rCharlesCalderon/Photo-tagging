import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import { AnimeMap } from "../components/AnimeMap";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Map1" element={<AnimeMap />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
