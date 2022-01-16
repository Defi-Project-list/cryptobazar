import React from "react";
import { useCoinsContext } from "../../contexts/CoinsContext";

const GlobalInfo = () => {
  const { globalData } = useCoinsContext();
  const formatCurrency = (currency) => {
    if (currency) return `$${currency.toFixed(1).toLocaleString()}`;
    return "N/A";
  };
  const {
    active_cryptocurrencies,
    market_cap_change_percentage_24h_usd: market_cap_change,
    market_cap_percentage: { btc, eth },
    total_market_cap: { usd: total_market_cap },
    total_volume: { usd: total_volume },
  } = globalData.data;

  return (
    <div>
      <h1>
        The global cryptocurrency market cap today is
        {formatCurrency(total_market_cap)}, a{market_cap_change.toFixed(1)}%
        change in the last 24 hours. Total cryptocurrency trading volume in the
        last day is at {formatCurrency(total_volume)}. Bitcoin dominance is at{" "}
        {btc.toFixed(1)} and Ethereum dominance is at
        {eth.toFixed(1)}. Cryptobazar is now tracking {active_cryptocurrencies}
        cryptocurrencies.
      </h1>
    </div>
  );
};

export default GlobalInfo;
