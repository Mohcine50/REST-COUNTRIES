import React from "react";
import "./header.css";

function Header({ switchTheme,theme }) {
  return (
    <div className='header'>
      <div className='container'>
        <h1>Where in the world?</h1>
        <div className='mode-switcher'>
          <ion-icon name='moon'></ion-icon>
          <span onClick={switchTheme}>{theme == "light" ? "dark" : "light"} Mode</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
