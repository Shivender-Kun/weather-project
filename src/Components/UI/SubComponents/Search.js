import { Coords } from "../../index";
import { fetchCoords } from "./index";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Search() {
  // React hook to store states
  const [city, setcity] = useState("");

  const dispatch = useDispatch();

  // Handle input change of search bar
  const handleChange = (e) => {
    setcity(e.target.value);
  };

  // Handle subission of searched city
  const handleSubmit = async (e) => {
    // Preventing default submission behaviour
    e.preventDefault();
    // Fetching coordinates of entered city
    const newCoords = await fetchCoords(city);
    // Storing new coordinates in redux store
    if (newCoords) {
      dispatch(Coords(newCoords));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Search flex-row">
      <input
        type="text"
        cityholder="Enter City..."
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
