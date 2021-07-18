import { Place, Coords } from "../../index";
import { fetchCoords } from "./index";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Search() {
  const [place, setplace] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setplace(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCoords = await fetchCoords(place);
    if (newCoords) dispatch(Coords(newCoords));
    dispatch(Place(place));
  };

  return (
    <form onSubmit={handleSubmit} className="Search flex-row">
      <input
        type="text"
        placeholder="Enter City..."
        className="search-bar"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" className="search-btn" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
}

export default Search;
