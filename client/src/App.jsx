import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Predictions from "./pages/Predictions";
import MarketNews from "./pages/MarketNews";
import Contact from "./pages/Contact";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predictions" element={<Predictions />} />
        <Route path="/market-news" element={<MarketNews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
