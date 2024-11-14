import React, { useEffect, useState } from "react";
import CoinPage from "./CoinPage";
import { useParams } from "react-router-dom";
import { getCoinData } from "@/hooks/getCoinData";
import { settingChartData } from "@/hooks/settingChartData.js";
import { getPrices } from "@/hooks/getPrices";
import { settingCoinObject } from "@/hooks/settingCoinObject";
import Loader from "@/components/Loader/Loader";
import ErrorPage from "../ErrorPage/ErrorPage";

function CoinPageContainer() {
  const { id } = useParams();

  const [coin, setCoin] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const getData = async () => {
    setIsLoading(true);
    try {
      let coinData = await getCoinData(id, setError);
      settingCoinObject(coinData, setCoin);

      if (coinData) {
        const prices = await getPrices(id, days, priceType, setError);
        if (prices) {
          settingChartData(setChartData, prices);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <Loader />
  ) : error ? (
    <ErrorPage />
  ) : (
    <CoinPage coin={coin} chartData={chartData} />
  );
}

export default CoinPageContainer;
