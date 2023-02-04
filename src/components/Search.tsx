import React from "react";
import SearchForm from "./SearchForm";

interface Props {}

const Search: React.FC<Props> = ({}) => {
  return (
    <div className="search px-12 max-w-3xl">
      <h1
        className="font-Starjedi text-yellow-400
            w-full text-center select-none
            text-mlt-auto sm:text-5xl md:text-6xl
            text-shadow-mlt-dark-0"
      >
        {/* =Star Hunters+ */}
        =Star Searches+
        {/* <br />` ~ ! @ # $ % ^ & * ( ) - _ = + / | \ ' " . : [ ] { } &lt; &gt; */}
      </h1>
      <SearchForm />
    </div>
  );
};

export default Search;
