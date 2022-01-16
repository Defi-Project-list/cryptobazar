import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinChart from "../components/coins/CoinChart";
import CoinInfo from "../components/coins/CoinInfo";
import Trending from "../components/coins/Trending";
import Loading from "../components/Loading";
import Error from "./Error";

const rootURL = "https://api.coingecko.com/api/v3/";
const SingleCoin = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [coinInfo, setCoinInfo] = useState(null);
  const [coinChart, setCoinChart] = useState(null);
  const [chartDays, setChartDays] = useState(30);

  // const { loading, error, data } = useFetch(
  //   `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=90&interval=daily`
  // );

  const fetchCryptoInfo = async () => {
    setLoading(true);
    try {
      const [chartResponse, infoResponse] = await Promise.allSettled([
        axios(
          `${rootURL}/coins/${id}/market_chart?vs_currency=usd&days=${chartDays}&interval=daily`
        ),
        axios(`${rootURL}/coins/${id}`),
      ]);
      if (chartResponse.status === "fulfilled") {
        setCoinChart(chartResponse.value.data);
        setLoading(false);
        setError(false);
      }
      if (infoResponse.status === "fulfilled") {
        setCoinInfo(infoResponse.value.data);
        setLoading(false);
        setError(false);
      }
      if (
        chartResponse.status === "rejected" ||
        infoResponse.status === "rejected"
      ) {
        console.clear();
        setLoading(false);
        setError(true);
      }
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchCryptoInfo();
    //eslint-disable-next-line
  }, [id, chartDays]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <Error />;
  }

  return (
    <section className="min-h-screen bg-gray-100">
      <div className="container mx-auto max-w-[1170px]  px-[1rem]">
        {coinInfo && <CoinInfo infoData={coinInfo} />}
        {coinChart && (
          <>
            <CoinChart
              chartData={coinChart.prices}
              type="Price"
              chartDays={chartDays}
              setChartDays={setChartDays}
            />
            <CoinChart
              chartData={coinChart.market_caps}
              type="Market Cap"
              chartDays={chartDays}
              setChartDays={setChartDays}
            />
            <CoinChart
              chartData={coinChart.total_volumes}
              type="Total Volume"
              chartDays={chartDays}
              setChartDays={setChartDays}
            />
          </>
        )}
        <Trending />
      </div>
    </section>
  );
};

export default SingleCoin;
