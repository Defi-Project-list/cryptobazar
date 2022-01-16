import { useEffect } from "react";
import Result from "./Result";

const Results = ({ query, results }) => {
  useEffect(() => {
    document.title = `Search Results | Cryptobazar`;
  }, []);

  return (
    <div className="py-[2rem]">
      {results && results.length > 0 && (
        <>
          <h1 className="font-extrabold text-black text-2xl uppercase mb-[1rem] align-middle">
            <span className="text-yellow-600 text-3xl">|</span>
            <span className="">Results for: {query} </span>
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
            {results.map((coin, index) => {
              return <Result key={index} {...coin} />;
            })}
          </div>
        </>
      )}
      {results && results.length === 0 && (
        <h1 className="text-gray-700 font-bold text-center text-4xl py-[2rem]">
          No Results Found
        </h1>
      )}
    </div>
  );
};

export default Results;
