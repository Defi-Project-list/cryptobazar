import React from "react";
import { ClipLoader } from "react-spinners";
import { useNewsContext } from "../../contexts/NewsContext";
import Article from "./Article";

const NFTNews = () => {
  const { paginatedNFTNews, NFTNews, setNFTPage, loading } = useNewsContext();

  return (
    <>
      {paginatedNFTNews.length !== 0 && (
        <h1 className="font-extrabold text-black text-2xl uppercase mb-[1rem]">
          <span className="text-yellow-600 text-3xl">|</span>
          <span className="">NFT News</span>
        </h1>
      )}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[2rem] mb-[2rem]">
        {!loading &&
          paginatedNFTNews.map((article, index) => {
            return <Article key={index} {...article} />;
          })}
      </div>
      {loading && (
        <div className="flex justify-center">
          <ClipLoader size={100} />
        </div>
      )}
      {!(paginatedNFTNews.length === NFTNews.length) && (
        <div className="flex justify-center">
          <button
            className="bg-black text-white font-semibold text-lg py-[.2rem] px-[1rem] rounded-md"
            onClick={() => setNFTPage((NFTPage) => NFTPage + 1)}
          >
            See More
          </button>
        </div>
      )}
    </>
  );
};

export default NFTNews;
