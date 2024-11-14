const fetchSearchResults = async (query, currencies) => {
    if (!query) {
      return [];
    }
  
    try {
      const result = currencies.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
  
      return result;
    } catch (error) {
      console.error("Error fetching search results:", error);
      return [];
    }
  };
  
  export default fetchSearchResults;
  