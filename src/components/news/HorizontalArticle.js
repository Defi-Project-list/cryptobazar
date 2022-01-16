import React from "react";
import DateTime from "datetime-js";

const HorizontalArticle = ({
  author,
  title,
  urlToImage,
  publishedAt,
  description,
  url,
  source,
}) => {
  const publishedDateObj = new Date(publishedAt);
  const publishedDate = DateTime(publishedDateObj, "%M %d %Y");
  return (
    <div className="bg-white shadow-xl rounded-md overflow-hidden">
      <div className="grid sm:grid-cols-2 gap-[1rem] p-[1rem]">
        <a href={url} target="_blank" rel="noreferrer">
          <img
            src={urlToImage}
            alt={title}
            className="h-[17rem] sm:h-[13rem] w-full object-cover"
          />
        </a>
        <div className="">
          <h2 className="text-gray-700 font-bold text-md mb-[.5rem]">
            {source.name}
          </h2>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-xl mb-[.5rem] hover:text-gray-800"
          >
            {title}
          </a>
          <p className="line-clamp font-serif mb-[.5rem]">{description}</p>
          <span className="block text-gray-700 font-semibold">
            {publishedDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HorizontalArticle;
