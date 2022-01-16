import React, { useEffect } from "react";
import NFTNews from "../components/news/NFTNews";
import LatestNews from "../components/news/LatestNews";
import PopularNews from "../components/news/PopularNews";

const News = () => {
  useEffect(() => {
    document.title = "News | Cryptobazar";
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 py-[1rem]">
      <div className="container mx-auto max-w-[1170px] px-[1rem]">
        <PopularNews />
        <LatestNews />
        <NFTNews />
      </div>
    </section>
  );
};

export default News;
