import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllCountries from "./pages/all countries/AllCountries";
import SingleCountry from "./pages/single country/SingleCountry";
import React, { useEffect, useState } from "react";
function App() {
  const [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  console.log(theme);

  return (
    <Router>
      <div className='app' data-theme={theme}>
        <Header switchTheme={switchTheme} theme={theme} />
        <Routes>
          <Route path='/' element={<AllCountries />} />
          <Route path='/:countryName' element={<SingleCountry />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
