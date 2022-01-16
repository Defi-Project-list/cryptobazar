import React from "react";
import { useNewsContext } from "../../contexts/NewsContext";
import Error from "../../pages/Error";
import HorizontalArticle from "./HorizontalArticle";

const PopularNews = () => {
  const { popularNews, error } = useNewsContext();

  if (error) {
    return <Error />;
  }

  return (
    <>
      <h1 className="font-extrabold text-black text-2xl uppercase mb-[1rem]">
        <span className="text-yellow-600 text-3xl">|</span>
        <span className="">Popular Crypto News</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-[2rem] mb-[2rem]">
        {popularNews.map((article, index) => {
          return <HorizontalArticle key={index} {...article} />;
        })}
      </div>
    </>
  );
};

export default PopularNews;
