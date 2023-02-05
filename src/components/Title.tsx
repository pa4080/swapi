import React from "react";

interface Props {
  title?: string;
}

const Title: React.FC<Props> = ({ title = "=Star Searches+" }) => {
  return (
    <h1 className="font-Starjedi text-yellow-400 w-full text-center select-none text-mlt-auto sm:text-5xl md:text-6xl text-shadow-mlt-dark-0">
      {title}
    </h1>
  );
};

export default Title;
