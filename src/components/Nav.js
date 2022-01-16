import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaNewspaper, FaSearch, FaTimes } from "react-icons/fa";
import { useCoinsContext } from "../contexts/CoinsContext";
const Nav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { globalData } = useCoinsContext();
  const {
    active_cryptocurrencies,
    market_cap_percentage: { btc, eth },
    markets,
    total_market_cap: { usd: total_market_cap },
    total_volume: { usd: total_volume },
  } = globalData.data;

  return (
    <>
      <div className="bg-slate-900">
        <div className="container mx-auto max-w-[1170px] px-[1rem] flex items-center gap-[1rem] overflow-scroll lg:overflow-hidden whitespace-nowrap">
          <h1 className="text-gray-300 text-[.7rem] font-bold p-[.5rem]">
            Coins:
            <span className="text-sky-400 ml-[.4rem]">
              {active_cryptocurrencies.toLocaleString()}
            </span>
          </h1>
          <h1 className="text-gray-300 text-[.7rem] font-bold">
            Markets:
            <span className="text-sky-400 ml-[.4rem]">
              {markets.toLocaleString()}
            </span>
          </h1>
          <h1 className="text-gray-300 text-[.7rem] font-bold">
            Market Cap:
            <span className="text-sky-400 ml-[.4rem]">
              ${total_market_cap.toFixed(2).toLocaleString()}
            </span>
          </h1>
          <h1 className="text-gray-300 text-[.7rem] font-bold">
            Volume:
            <span className="text-sky-400 ml-[.4rem]">
              ${total_volume.toFixed(2).toLocaleString()}
            </span>
          </h1>
          <h1 className="text-gray-300 text-[.7rem] font-bold">
            Dominance:
            <span className="text-sky-400 ml-[.4rem]">
              BTC: ${btc.toFixed(1)}% ETH: {eth.toFixed(1)}%
            </span>
          </h1>
        </div>
      </div>
      <nav className="bg-zinc-900 py-[1rem]">
        <div className="container mx-auto max-w-[1170px]  px-[1rem]">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="text-white font-extrabold text-xl uppercase"
            >
              CryptoBazar
            </Link>
            <div className="justify-center items-center text-white gap-[3rem] hidden sm:flex">
              <Link
                className="font-bold text-md text-white hover:text-gray-300"
                to="/"
              >
                Home
              </Link>
              <Link
                className="font-bold text-md text-white hover:text-gray-300"
                to="/search"
              >
                Search
              </Link>
              <Link
                className="font-bold text-md text-white hover:text-gray-300"
                to="/news"
              >
                News
              </Link>
            </div>
            <div className="hidden sm:block"></div>
            <FaBars
              className="text-white text-2xl sm:hidden"
              onClick={() => setShowMobileNav(true)}
            />
          </div>
        </div>
      </nav>
      <nav
        className={`bg-zinc-900 fixed top-0 left-0 w-full h-full z-[100] transition-all sm:hidden ${
          showMobileNav ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center p-[1rem] mb-[1rem]">
          <FaTimes
            className="text-white text-2xl"
            onClick={() => setShowMobileNav(false)}
          />
          <Link
            to="/"
            className="text-white font-extrabold text-xl uppercase"
            onClick={() => setShowMobileNav(false)}
          >
            CryptoBazar
          </Link>
          <div></div>
        </div>
        <div className="grid gap-[3rem]">
          <Link
            className="flex items-center gap-[1rem] px-[1rem] font-bold text-xl text-white hover:text-gray-300"
            to="/"
            onClick={() => setShowMobileNav(false)}
          >
            <FaHome />
            Home
          </Link>
          <Link
            className="flex items-center gap-[1rem] px-[1rem]  font-bold text-xl text-white hover:text-gray-300"
            to="/search"
            onClick={() => setShowMobileNav(false)}
          >
            <FaSearch />
            Search
          </Link>
          <Link
            className="flex items-center gap-[1rem] px-[1rem]  font-bold text-xl text-white hover:text-gray-300"
            to="/news"
            onClick={() => setShowMobileNav(false)}
          >
            <FaNewspaper />
            News
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;

//  <div className="justify-center items-center gap-[1rem] hidden sm:flex">
//    <img
//      src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/05/931/523/Ethereum-Bitcoin-Dogecoin.jpg?ve=1&tl=1"
//      alt="user avatar"
//      className="w-[2.5rem] h-[2.5rem] object-cover rounded-full"
//    />
//    <span className="capitalize text-white text-xl font-semibold font-mono hidden lg:block">
//      Elon Musk
//    </span>
//    <button className="bg-white border-[3px] border-white font-bold text-lg text-black  px-[.5rem]  rounded-sm hover:bg-black hover:text-white">
//      Logout <MdLogout className="inline-block align-middle" />
//    </button>
//  </div>;
