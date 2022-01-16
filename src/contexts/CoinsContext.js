import axios from "axios";
import { useContext, createContext, useEffect, useState } from "react";
import LoadingPage from "../pages/LoadingPage.js";
import Error from "../pages/Error.js";

export const CoinsContext = createContext(null);

const mainURL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=300";
const trendingURL = "https://api.coingecko.com/api/v3/search/trending";
const globalURL = "https://api.coingecko.com/api/v3/global";

export const CoinsProvider = ({ children }) => {
  const [coins, setCoins] = useState(null);
  const [trendingCoins, setTrendingCoins] = useState(null);
  const [globalData, setGlobalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchCoinsData = async () => {
    setLoading(true);
    try {
      const [mainResponse, trendingResponse, globalResponse] =
        await Promise.allSettled([
          axios(mainURL),
          axios(trendingURL),
          axios(globalURL),
        ]);
      if (mainResponse.status === "fulfilled") {
        setCoins(mainResponse.value.data);
      }
      if (trendingResponse.status === "fulfilled") {
        setTrendingCoins(trendingResponse.value.data);
      }
      if (globalResponse.status === "fulfilled") {
        setGlobalData(globalResponse.value.data);
      }
      setLoading(false);
      setError(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchCoinsData();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <CoinsContext.Provider
      value={{ coins, trendingCoins, globalData, loading, error }}
    >
      {children}
    </CoinsContext.Provider>
  );
};

export const useCoinsContext = () => useContext(CoinsContext);
