import React, { useState } from "react";
import Search from "./Search";
import fetchSearchResults from "@/hooks/fetchSearchResults";

function SearchContainer({ setSearchResults, currencies }) {
  const [search, setSearch] = useState("");

  async function handleSearchChange(event) {
    const query = event.target.value;
    setSearch(query);

    const results = await fetchSearchResults(query, currencies);
    setSearchResults(results);
  }

  return <Search handleSearchChange={handleSearchChange} search={search} />;
}

export default SearchContainer;
