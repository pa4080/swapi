import React from "react";
interface Props {
  title?: string;
  titleStyle?: string;
}

const Title: React.FC<Props> = ({
  title = "=Star Searches+",
  titleStyle = "text-mlt-auto-1 sm:text-6xl"
}) => {
  return (
    <h1
      id="Title"
      className={`font-Starjedi text-yellow-400 w-full text-center select-none  title-shadow-mlt-dark-0 ${titleStyle}`}
    >
      {title}
    </h1>
  );
};

export default Title;
