import React, { createContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contirbutions from "./pages/Contributions";
import Navbar from "./components/Navbar";
import { Icon } from "@iconify/react";
import Learn from "./pages/learn";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { auth, firestore } from "./firebase.config";
import { onAuthStateChanged } from "firebase/auth";

export const appContext = createContext({
  user: null,
  userData: {},
  uid: "",
});
const App = () => {
  const [userData, setUserData] = useState({});
  const [user, setUser] = useState(null);
  const [uid, Setuid] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (_user) => {
      if (_user) {
        setUser(_user);
        Setuid(_user.uid);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <appContext.Provider value={{ user, userData, uid }}>
      <div className="w-full min-h-screen flex flex-col text-gray-700 relative">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contributions" element={<Contirbutions />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </appContext.Provider>
  );
};

export default App;
