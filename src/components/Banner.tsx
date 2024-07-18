// src/components/Banner.tsx
import React from "react";
import BannerImage from "../assets/BANER.png"; // adjust the path if necessary
import "./Banner.css";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <img src={BannerImage} alt="Banner" />
    </div>
  );
};

export default Banner;
