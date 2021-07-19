import React from "react";
import { Night } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  const nightMode = useSelector((state) => state.NightTheme.night);

  return (
    <header className="flex-row">
      <h1>Weather App</h1>
      {/* Theme changer */}
      <p className="theme" onClick={() => dispatch(Night())}>
        {nightMode ? "Dark" : "Light"}
      </p>
    </header>
  );
}

export default Header;
