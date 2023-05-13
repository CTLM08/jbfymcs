import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contirbutions from "./pages/Contributions";
import Navbar from "./components/Navbar";
import { Icon } from "@iconify/react";
import Learn from "./pages/learn";
import Footer from "./components/Footer";
import Login from "./pages/Login";
const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col text-gray-700">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contributions" element={<Contirbutions />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
