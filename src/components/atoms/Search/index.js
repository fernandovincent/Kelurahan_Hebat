import React from "react";
import "./index.css";

const Search = ({ search }) => {
  return (
    <div>
      <input type="text" placeholder="Cari Informasi . . ." className="search" />
      <button type="button" class="btn">
        <img src={search} />
      </button>
    </div>
  );
};

export default Search;
