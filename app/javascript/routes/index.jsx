import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../components'

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </Router>
)
