import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ExerciseDetail from "./pages/ExerciseDetail.js";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [progress, setProgress] = useState(0);
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <LoadingBar
        color="#f11946"
        progress={progress}
        
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setProgress={setProgress}/>} />
        <Route path="/exercise/:id" element={<ExerciseDetail setProgress={setProgress}/>} />
      </Routes>
      <Footer />
    </Box>
  );
};
export default App;
