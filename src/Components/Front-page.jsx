import React, { useState } from "react";
import banner from "./Images/LibraryHero.png";
import logo from "./Images/LibraryLogo.png";
import PhotoCollage from "./PhotoCollage";
import NavBar from "./NavBar/NavBar";
import "./FrontPage.css";

function FrontPage() {
  return (
    <>
      <div className="top">
        <NavBar />
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="container">
        <img src={banner} alt="Banner" />
        <form
          className="button"
          action="https://store.steampowered.com/app/1961210/AiOnic/"
        >
          <input type="submit" value="Join now!" />
        </form>
      </div>
      <div className="text">
        <h1>Welcome to Ai-Onic</h1>
        <p>Ai-Onic is a xyz game where you can xyz</p>
      </div>
      <PhotoCollage />
    </>
  );
}

export default FrontPage;
