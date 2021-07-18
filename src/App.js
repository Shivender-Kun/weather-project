import "./App.css";
import { Coords } from "./store/index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Main, geolocation } from "./Components/index";

function App() {
  const dispatch = useDispatch();

  const nightMode = useSelector((state) => state.NightTheme.night);

  useEffect(() => {
    function success(pos) {
      const location = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };
      dispatch(Coords(location));
    }

    geolocation(success);
  }, [dispatch]);

  return (
    <div className={nightMode ? "Night App flex-col" : "Day App flex-col"}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
