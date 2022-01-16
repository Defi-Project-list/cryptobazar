import { useEffect } from "react";
import CoinsTable from "../components/coins/CoinsTable";
import Hero from "../components/coins/Hero";
import Trending from "../components/coins/Trending";

const Coins = () => {
  useEffect(() => {
    document.title = "Home | Cryptobazar";
  }, []);
  return (
    <section className="min-h-screen bg-gray-100">
      <Hero />
      <div className="container mx-auto max-w-[1170px]  px-[1rem]">
        <CoinsTable />
        <Trending />
      </div>
    </section>
  );
};

export default Coins;
