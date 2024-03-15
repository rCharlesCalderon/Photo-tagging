import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import { Midnight } from "../components/Midnight";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Map1" element={<Midnight />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
