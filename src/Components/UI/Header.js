import React from "react";
import { Night } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const nightMode = useSelector((state) => state.NightTheme.night);

  return (
    <header className="flex-row">
      <h1>Weather App</h1>
      <div className="theme" onClick={() => dispatch(Night())}>
        {nightMode ? "Night Mode on" : "Day Mode on"}
      </div>
    </header>
  );
}

export default Header;
