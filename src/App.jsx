import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Props from "./Pages/Props";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Props />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;