import React, { useEffect } from "react";
import ErrorImage from "../images/404.png";

const Error = () => {
  useEffect(() => {
    document.title = "404 Error | Cryptobazar";
  }, []);
  return (
    <section className="bg-gray-100 py-[1rem]">
      <div className="h-[80vh] flex flex-col gap-[1rem] justify-center items-center">
        <img src={ErrorImage} alt="error" className="h-[12rem]" />
        <h1 className="font-bold text-5xl text-center">Page not found</h1>
      </div>
    </section>
  );
};

export default Error;
