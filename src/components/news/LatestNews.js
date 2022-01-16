import React from "react";
import { useNewsContext } from "../../contexts/NewsContext";
import Article from "./Article";
import Error from "../../pages/Error";

const LatestNews = () => {
  const { latestNews, error } = useNewsContext();

  if (error) {
    return <Error />;
  }

  return (
    <>
      <h1 className="font-extrabold text-black text-2xl uppercase mb-[1rem] align-middle">
        <span className="text-yellow-600 text-3xl">|</span>
        <span className="">Latest Crypto News</span>
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[2rem] mb-[2rem]">
        {latestNews.map((article, index) => {
          return <Article key={index} {...article} />;
        })}
      </div>
    </>
  );
};

export default LatestNews;
