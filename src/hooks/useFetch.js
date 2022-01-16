import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCryptoNews = async () => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      setData(data);
      setLoading(false);
      setError(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchCryptoNews();
    //eslint-disable-next-line
  }, []);

  return { loading, error, data };
};

export default useFetch;
