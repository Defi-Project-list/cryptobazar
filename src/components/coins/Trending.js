import React from "react";
import { useCoinsContext } from "../../contexts/CoinsContext";
import Coin from "./Coin";

const Trending = () => {
  const { trendingCoins } = useCoinsContext();
  return (
    <div className="py-[2rem]">
      <h1 className="font-extrabold text-black text-2xl uppercase mb-[1rem] align-middle">
        <span className="text-yellow-600 text-3xl">|</span>
        <span className="">Today's Trending Crypto</span>
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
        {trendingCoins.coins.map((coin, index) => {
          return <Coin key={index} {...coin} />;
        })}
      </div>
    </div>
  );
};

export default Trending;
