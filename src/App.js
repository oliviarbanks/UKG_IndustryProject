import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calendar from "./components/calendar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/calendar" element={<Calendar />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
