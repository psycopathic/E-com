import React from "react";
import { Route, Routes } from "react-router-dom";
import Signupage from "./pages/Signupage";
import Loginpage from "./pages/Loginpage";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen br-gray-900 text-white relative overflow-hidden">
        {/* Background hidden */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.8)_45%,rgba(0,0,0,0.9)_100%)] z-0" />
          </div>
        </div>
        <div className="relative z-50 pt-20">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<Signupage />} />
            <Route path="/login" element={<Loginpage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
