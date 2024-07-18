// src/App.tsx
import React from "react";
import Leaderboard from "./components/Leaderboard";
import AddScorePopup from "./components/AddScorePopup";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import "./App.css";


const App: React.FC = () => {
  return (
    <div className="App">
      <Leaderboard />
      <AddScorePopup />
      <Banner />
      <Footer />
    </div>
  );
};

export default App;
