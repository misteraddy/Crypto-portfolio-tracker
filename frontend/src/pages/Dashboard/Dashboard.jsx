import SearchContainer from "@/components/Search/SearchContainer";
import TabsComponent from "@/components/TabsCompoent/TabsComponent";
import useCurrencyStore from "@/stores/useCurrencyStore";
import { coinGeckoInstance } from "@/utils/constants";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const { currencies, fetchCurrencies } = useCurrencyStore();

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <div>
      <div className="min-h-[20vh] dark:border-white flex justify-center items-center">
        <SearchContainer
          setSearchResults={setSearchResults}
          currencies={currencies}
        />
      </div>
      <TabsComponent
        coins={searchResults.length > 0 ? searchResults : currencies}
      />
    </div>
  );
}

export default Dashboard;
