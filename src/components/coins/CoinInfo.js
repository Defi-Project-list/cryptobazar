import React, { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaReddit, FaTwitter } from "react-icons/fa";

/// const {image, name, symbol, current_price, high_24h: {usd: hight_24}h, low_24, total_volume, market_cap, max_supply} = coin;
const CoinInfo = ({ infoData }) => {
  const [readMore, setReadMore] = useState(false);
  const {
    name,
    categories,
    description: { en: description },
    image: { large },
    market_cap_rank,
    market_data,
    symbol,
    links,
  } = infoData;

  const {
    ath: { usd: ath },
    atl: { usd: atl },
    high_24h: { usd: high_24h },
    low_24h: { usd: low_24h },
    current_price: { usd: current_price },
    market_cap: { usd: market_cap },
    fully_diluted_valuation: { usd: fully_diluted_valuation },
    total_supply,
    circulating_supply,
    price_change_percentage_24h: priceChange,
  } = market_data;
  const {
    blockchain_site,
    homepage,
    repos_url: { github },
    subreddit_url,
    twitter_screen_name,
    facebook_username,
  } = links;

  useEffect(() => {
    document.title = `${name} (${symbol.toUpperCase()}) | Cryptobazar)`;
  }, [name, symbol]);

  const formatCurrency = (currency) => {
    if (currency < 1) return `$${currency}`;
    if (currency) return `$${currency.toLocaleString()}`;
    return "N/A";
  };

  return (
    <>
      <div className="grid lg:grid-cols-[2fr_1fr] py-[2rem] gap-[1rem]">
        <div>
          <div className="mb-[1rem]">
            <h1 className="py-[.1rem] px-[.7rem] font-semibold text-md bg-black text-white rounded-md w-[8rem] mb-[1rem]">
              Rank #{market_cap_rank}
            </h1>
            <div className="flex gap-[.3rem] items-center mb-[.4rem]">
              <img src={large} alt={name} className="w-[2.5rem] h-[2.5rem]" />
              <h1 className="font-bold text-2xl">
                {name} <span className="uppercase">({symbol})</span>
              </h1>
            </div>
            <h1 className="font-bold text-gray-800 text-3xl">
              {formatCurrency(current_price)}
              <span
                className={`${
                  priceChange > 0 ? "text-green-500" : "text-red-800"
                } ml-[1rem] font-semibold`}
              >
                {priceChange.toFixed(1)}%
              </span>
            </h1>
          </div>
          <div className="bg-white shadow-md rounded-md p-[1rem]">
            <div className="grid sm:grid-cols-2  gap-[.5rem]">
              <div className="grid grid-cols-[1fr_1fr] gap-[.5rem]">
                <h1 className="text-gray-700 font-bold text-sm">Market Cap:</h1>
                <h1 className="font-semibold">{formatCurrency(market_cap)}</h1>
              </div>
              <div className="grid grid-cols-[1fr_1fr] gap-[.5rem]">
                <h1 className="text-gray-700 font-bold text-sm">
                  Circulating Supply:
                </h1>
                <h1 className="font-semibold ">
                  {formatCurrency(circulating_supply)}
                </h1>
              </div>
              <div className="grid grid-cols-[1fr_1fr] gap-[.5rem]">
                <h1 className="text-gray-700 font-bold text-sm">
                  Total Supply
                </h1>
                <h1 className="font-semibold">
                  {formatCurrency(total_supply)}
                </h1>
              </div>
              <div className="grid grid-cols-[1fr_1fr] gap-[.5rem]">
                <h1 className="text-gray-700 font-bold text-sm">
                  Fully diluted valuation:
                </h1>
                <h1 className="font-semibold">
                  {formatCurrency(fully_diluted_valuation)}
                </h1>
              </div>
              <div className="grid grid-cols-[1fr_1fr] gap-[.5rem]">
                <h1 className="text-gray-700 font-bold text-sm">
                  24 hour High Price:
                </h1>
                <h1 className="font-semibold">{formatCurrency(high_24h)}</h1>
              </div>
              <div className="grid grid-cols-[1fr_1fr] gap-[.5rem]">
                <h1 className="text-gray-700 font-bold text-sm">
                  24 hour Low Price:
                </h1>
                <h1 className="font-semibold">{formatCurrency(low_24h)}</h1>
              </div>
              <div className="grid grid-cols-[1fr_1fr] gap-[.5rem]">
                <h1 className="text-gray-700 font-bold text-sm">
                  All time High Price:
                </h1>
                <h1 className="font-semibold">{formatCurrency(ath)}</h1>
              </div>
              <div className="grid grid-cols-[1fr_1fr] gap-[.5rem]">
                <h1 className="text-gray-700 font-bold text-sm">
                  All time Low Price:
                </h1>
                <h1 className="font-semibold">{formatCurrency(atl)}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md p-[1rem]">
          <h1 className="font-bold text-2xl mb-[1rem]">Info</h1>
          <div className="grid grid-cols-[1fr_2fr]  mb-[.5rem]">
            <h1 className="text-sm font-bold text-gray-700 p-[.3rem]">
              Website:{" "}
            </h1>
            <div className="flex flex-wrap gap-[.3rem]">
              {homepage.length > 0 && (
                <a
                  href={homepage[0]}
                  className="rounded-md p-[.3rem] text-sm font-bold bg-gray-200 hover:bg-gray-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  {name}
                </a>
              )}
            </div>
          </div>
          <div className="grid grid-cols-[1fr_2fr]  mb-[.5rem]">
            <h1 className="text-sm font-bold text-gray-700 p-[.3rem]">
              Explorers:{" "}
            </h1>
            <div className="flex flex-wrap gap-[.3rem]">
              {blockchain_site.length > 0 && (
                <a
                  href={blockchain_site[0]}
                  className="rounded-md p-[.3rem] text-sm font-bold bg-gray-200 hover:bg-gray-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  {name}
                </a>
              )}
            </div>
          </div>
          <div className="grid grid-cols-[1fr_2fr]  mb-[.5rem]">
            <h1 className="text-sm font-bold text-gray-700 p-[.3rem]">
              Categories:
            </h1>
            <div className="flex flex-wrap gap-[.3rem]">
              {categories &&
                categories
                  .filter((category) => category !== null)
                  .slice(0, 2)
                  .map((category, index) => {
                    return (
                      <span
                        key={index}
                        className="rounded-md p-[.3rem] text-sm font-bold bg-gray-200"
                      >
                        {category}
                      </span>
                    );
                  })}
            </div>
          </div>
          <div className="grid grid-cols-[1fr_2fr]  mb-[.5rem]">
            <h1 className="text-sm font-bold text-gray-700 p-[.3rem]">
              Community:{" "}
            </h1>
            <div className="flex flex-wrap gap-[.3rem]">
              {subreddit_url && (
                <a
                  href={subreddit_url}
                  className="flex items-center gap-[.3rem] rounded-md p-[.3rem] text-sm font-bold bg-gray-200 hover:bg-gray-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaReddit />
                  Reddit
                </a>
              )}
              {twitter_screen_name && (
                <a
                  href={`https://twitter.com/${twitter_screen_name}`}
                  className="flex items-center gap-[.3rem] rounded-md p-[.3rem] text-sm font-bold bg-gray-200 hover:bg-gray-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                  Twitter
                </a>
              )}
              {facebook_username && (
                <a
                  href={`https://facebook.com/${facebook_username}`}
                  className="flex items-center gap-[.3rem] rounded-md p-[.3rem] text-sm font-bold bg-gray-200 hover:bg-gray-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                  Facebook
                </a>
              )}
            </div>
          </div>
          <div className="grid grid-cols-[1fr_2fr]  mb-[.5rem]">
            <h1 className="text-sm font-bold text-gray-700 p-[.3rem]">
              Source code:
            </h1>
            <div className="flex flex-wrap gap-[.3rem]">
              {github.length > 0 && (
                <a
                  href={github[0]}
                  className="flex items-center gap-[.3rem] rounded-md p-[.3rem] text-sm font-bold bg-gray-200 hover:bg-gray-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  Github
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {description && (
        <div className="bg-white p-[1rem] shadow-md rounded-md mb-[2rem]">
          <h1 className="text-2xl font-bold mb-[.5rem]">About {name}</h1>
          <p
            className={`${
              !readMore
                ? "line-clamp leading-7 mb-[.5rem]"
                : "leading-7 mb-[.5rem]"
            }`}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="flex justify-center">
            <button
              className="text-gray-700 font-semibold py-[.2rem] px-[.7rem] rounded-md hover:text-gray-400"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CoinInfo;
