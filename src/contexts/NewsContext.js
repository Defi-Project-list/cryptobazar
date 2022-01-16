import { useContext, createContext, useState, useEffect } from "react";
import { mockNews } from "../mockData/mockNews";
import { mockPopularNews } from "../mockData/mockPopularNews";
import axios from "axios";

export const NewsContext = createContext(null);

const rootURL = `https://newsapi.org/v2/everything?apiKey=${process.env.REACT_APP_NEW_API_KEY}`;
const latestEndpoint = "&sortBy=publishedAt";
const popularEndpoint = "&sortBy=popularity";

export const NewsProvider = ({ children }) => {
  const [latestNews, setLatestNews] = useState(mockNews.articles.slice(0, 6));
  const [popularNews, setPopularNews] = useState(
    mockPopularNews.articles.slice(0, 6)
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [NFTNews, setNFTNews] = useState([]);
  const [paginatedNFTNews, setPaginatedNFTNews] = useState([]);
  const [NFTPage, setNFTPage] = useState(0);

  const paginate = (array, page_size, page_number) => {
    return array.slice(
      page_number * page_size,
      page_number * page_size + page_size
    );
  };

  const fetchCryptoNews = async () => {
    setLoading(true);
    try {
      const [latestResponse, popularResponse, NFTResponse] =
        await Promise.allSettled([
          axios(`${rootURL}&q=crypto${latestEndpoint}&pageSize=6`),
          axios(`${rootURL}&q=crypto${popularEndpoint}&pageSize=6`),
          axios(`${rootURL}&q=nft${popularEndpoint}&pageSize=100`),
        ]);
      if (latestResponse.status === "fulfilled") {
        setLatestNews(latestResponse.value.data.articles);
      }
      if (latestResponse.status === "fulfilled") {
        setPopularNews(popularResponse.value.data.articles);
      }
      if (NFTResponse.status === "fulfilled") {
        setNFTNews(NFTResponse.value.data.articles);
        setPaginatedNFTNews([]);
      }
      setLoading(false);
      setError(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchCryptoNews();
  }, []);

  useEffect(() => {
    setPaginatedNFTNews([
      ...paginatedNFTNews,
      ...paginate(NFTNews, 6, NFTPage),
    ]);
    setLoading(false);
    setError(false);
    //eslint-disable-next-line
  }, [NFTPage, NFTNews]);

  return (
    <NewsContext.Provider
      value={{
        latestNews,
        popularNews,
        paginatedNFTNews,
        NFTNews,
        NFTPage,
        setNFTPage,
        loading,
        error,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = () => useContext(NewsContext);
