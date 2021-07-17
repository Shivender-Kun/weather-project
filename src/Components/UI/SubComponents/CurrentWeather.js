import React from "react";

function CurrentWeather() {
  return (
    <div className="container flex-col full-w-half-h">
      <div className="current-weather flex-col">
        <h2 id="current-temp">40° C</h2>
      </div>
      <h3 id="current-condition">Moist</h3>
    </div>
  );
}

export default CurrentWeather;
