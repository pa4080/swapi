import React from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Title from "../components/Title";

interface Props {}

const Search: React.FC<Props> = () => {
  return (
    <div id="Search" className="mlt-flex-container max-w-mlt-1xl">
      <div id="Search_Header" className="mlt-header pt-4">
        <Title />
        <SearchForm />
      </div>

      <div id="Search_Content" className="mlt-content w-full">
        <SearchResults />
      </div>
    </div>
  );
};

export default Search;
