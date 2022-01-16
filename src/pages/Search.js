import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "../components/search/Form";
import Results from "../components/search/Results";
import Error from "./Error";
import Loading from "../components/Loading";
import SearchBgImage from "../images/searchbg.jpg";

const Search = () => {
  const [query, setQuery] = useState("bitcoin");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [results, setResults] = useState(null);

  const fetchResults = async () => {
    setLoading(true);
    try {
      if (query) {
        const searchURL = `https://api.coingecko.com/api/v3/search?query=${query}`;
        const { data } = await axios(searchURL);
        setResults(data.coins);
      } else {
        setResults([]);
      }
      setLoading(false);
      setError(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchResults();
    //eslint-disable-next-line
  }, [query]);

  return (
    <section className="min-h-screen bg-gray-100">
      <div
        className="h-[30vh] bg-center bg-cover p-[3rem] grid place-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.7)), url('${SearchBgImage}')`,
        }}
      >
        <Form query={query} setQuery={setQuery} />
      </div>
      <div className="container mx-auto max-w-[1170px]  px-[1rem]">
        {loading && (
          <>
            <Loading />
          </>
        )}
        {!loading && <Results query={query} results={results} />}
        {error && <Error />}
      </div>
    </section>
  );
};

export default Search;
