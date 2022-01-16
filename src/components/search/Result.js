import React from "react";
import { Link } from "react-router-dom";

const Result = ({ id, symbol, large, name, market_cap_rank }) => {
  return (
    <Link
      to={`/coin/${id}`}
      className="bg-white rounded-md shadow-xl px-[.5rem] py-[1rem]"
    >
      <div className="flex flex-col justify-center items-center gap-[.5rem]">
        <img
          src={large}
          alt={name}
          className="w-[5rem] h-[5rem] rounded-full object-cover"
        />
        <div>
          <h1 className="font-bold text-xl text-center">{name}</h1>
          <h2 className="font-mono text-lg text-gray-800 text-center">
            <strong> Rank:</strong> #{market_cap_rank}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default Result;
