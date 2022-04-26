import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <h1 className="title">Ai-Onic</h1>
      <a href="https://www.tiktok.com/@ai_onic">
        <img
          className="tiktok"
          src="https://pngfolio.com/images/all_img/1631446412tik-tok-logo-transparent.png"
          alt=""
        />
      </a>
      <a href="https://discord.gg/4qzfFvVK9Z">
        <img
          className="discord"
          src="https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png"
          alt=""
        />
      </a>
    </div>
  );
}

export default NavBar;
