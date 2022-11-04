import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact
} from "./components/index.js";

ReactDOM.render(
  <Router>
    <div id="page-container">
      <div id="content-wrap">
        <Navigation />
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
          </Routes>
      </div>
    <Footer />
    </div>
  </Router>,

  document.getElementById("root")
);
