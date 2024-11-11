import React, { useState } from "react";
import Search from "./Search";

function SearchContainer() {
  const [search, setSearch] = useState();

  function handleSearchChange(event) {
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  return <Search handleSearchChange={handleSearchChange} search={search} />;
}

export default SearchContainer;
