import React from "react";
import { FaSearch } from "react-icons/fa";

const Form = ({ query, setQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form className="text-white relative" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="text-black px-[1rem] py-[.7rem] w-[15rem] sm:w-[25rem] text-2xl font-semibold rounded-md"
        placeholder="Enter coin name"
      />
      <FaSearch className="text-xl absolute top-4 right-3 text-black" />
    </form>
  );
};

export default Form;
