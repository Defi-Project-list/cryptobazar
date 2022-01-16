import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center py-[4rem]">
      <ClipLoader size={80} />
    </div>
  );
};

export default Loading;
