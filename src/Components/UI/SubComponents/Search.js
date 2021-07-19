import { Place, Coords } from "../../index";
import { fetchCoords } from "./index";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Search() {
  // React hook to store states
  const [place, setplace] = useState("");

  const dispatch = useDispatch();

  // Handle input change of search bar
  const handleChange = (e) => {
    setplace(e.target.value);
  };

  // Handle subission of searched place
  const handleSubmit = async (e) => {
    // Preventing default submission behaviour
    e.preventDefault();
    // Fetching coordinates of entered place
    const newCoords = await fetchCoords(place);
    // Storing new coordinates in redux store
    if (newCoords) dispatch(Coords(newCoords));
    // Storing searched place in redux store
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
