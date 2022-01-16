import React from "react";
import { BounceLoader } from "react-spinners";

const Error = () => {
  return (
    <section className="w-screen h-screen bg-zinc-900 py-[1rem] ">
      <div className="h-full flex flex-col gap-[1.5rem] justify-center items-center">
        <BounceLoader size={60} color="yellow" />
        <h1 className="text-center text-gray-400 font-bold text-2xl">
          Loading Cryptobazar...
        </h1>
      </div>
    </section>
  );
};

export default Error;
