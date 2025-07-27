import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Adminpage from "./pages/Adminpage";
import Signupage from "./pages/Signupage";
import Loginpage from "./pages/Loginpage";
import Homepage from "./pages/Homepage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";

import Navbar from "./components/Navbar";
import { useUserStore } from "./store/useUserStore";
import { useCartStore } from "./store/useCartStore";
import LoadingSpinner from "./components/LoadingSpinner";

import { Toaster } from "react-hot-toast";
function App() {
  const {user, checkAuth, checkingAuth} = useUserStore();
  const {getCartItem} = useCartStore();
  useEffect(() =>{
    checkAuth();
  },[checkAuth])

  useEffect(() => {
    if(!user)return;
    getCartItem();
  }, [getCartItem]); 

  if(checkingAuth) return <LoadingSpinner />

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
            <Route path="/signup" element={!user?<Signupage />:<Navigate to="/" />} />
            <Route path="/login" element={!user ? (<Loginpage />) : (<Navigate to="/" />)}/>

            <Route path="/secretDashboard" element={user && user.role === "admin"?<Adminpage/>:<Navigate to="/login" />} />
            <Route path='/category/:category' element={<CategoryPage />}/>
            <Route path='/cart' element={user ? <CartPage /> : <Navigate to='/login' />} />
          </Routes>
        </div>
        <Toaster/>
      </div>
    </>
  );
}

export default App;
