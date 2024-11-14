import SearchContainer from "@/components/Search/SearchContainer";
import TabsComponent from "@/components/TabsCompoent/TabsComponent";
import { coinGeckoInstance } from "@/utils/constants";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Get 100 Coins
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    coinGeckoInstance
      .get(
        "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        console.log("RESPONSE>>>", response.data);
        setCoins(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR>>>", error.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="min-h-[20vh] dark:border-white flex justify-center items-center">
        <SearchContainer setSearchResults={setSearchResults} currencies={coins} />
      </div>
      <TabsComponent coins={searchResults.length > 0 ? searchResults : coins} />
    </div>
  );
}

export default Dashboard;
