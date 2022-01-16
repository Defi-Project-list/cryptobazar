import React from "react";
import DateTime from "datetime-js";
import NoImage from "../../images/noimage.png";

const Article = ({
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
      <div className="">
        <a href={url} target="_blank" rel="noreferrer">
          <img
            src={urlToImage}
            alt={title}
            className="h-[17rem] w-full object-cover"
            onError={(e) => (e.target.src = NoImage)}
          />
        </a>
        <div className="p-[.5rem]">
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

export default Article;
