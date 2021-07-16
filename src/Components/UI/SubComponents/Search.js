import React from "react";

function Search() {
  return (
    <div className="Search flex-row">
      <input type="text" placeholder="Enter City..." className="search-bar" />
      <button type="submit" className="search-btn">
        Search
      </button>
    </div>
  );
}

export default Search;
