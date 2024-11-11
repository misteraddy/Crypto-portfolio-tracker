
import React, { useEffect } from "react";
import CoinPage from "./CoinPage";
import { useParams } from "react-router-dom";
import useCoinStore from "@/stores/useCoinStore";

function CoinPageContainer() {
  const { id } = useParams();
  const { coin, fetchCoin } = useCoinStore();

  useEffect(() => {
    fetchCoin(id);
  }, [id, fetchCoin]);

  if (!coin) return <div>Loading...</div>;

  return <CoinPage coin={coin} />;
}

export default CoinPageContainer;
