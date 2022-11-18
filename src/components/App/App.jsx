import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import Homepage from "../Homepage/Homepage";

import Buttons from "../Buttons/Buttons";
import Checkboxs from "../Checkboxs/Checkboxs";
import RadioButtons from "../RadioButons/RadioButtons";

import "./App.css";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Homepage />} />
          <Route path="button" element={<Buttons />} />
          <Route path="checkbox" element={<Checkboxs />} />
          <Route path="radiobutton" element={<RadioButtons />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
