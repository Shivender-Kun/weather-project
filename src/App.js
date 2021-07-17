import "./App.css";
import React, { useState, useEffect } from "react";
import {
  Header,
  Footer,
  Main,
  fetchWeather,
  geolocation,
} from "./Components/index";

function App() {
  const [lat, setlat] = useState(null);
  const [lon, setlon] = useState(null);

  function success(pos) {
    setlat(pos.coords.latitude);
    setlon(pos.coords.longitude);
    console.log(pos);
    return;
  }

  useEffect(() => {
    geolocation(success);
    fetchWeather(lat, lon);
  }, [lat, lon]);

  return (
    <div className="App flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
