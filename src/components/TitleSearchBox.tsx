import React from "react";
import SearchForm from "./SearchForm";
import Title from "./Title";

interface Props {}

const TitleSearchBox: React.FC<Props> = (props) => {
  return (
    <div id="TitleSearchBox">
      <Title />
      <SearchForm />
    </div>
  );
};

export default TitleSearchBox;
