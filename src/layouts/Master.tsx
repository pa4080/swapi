/**
 * References:
 * > https://www.npmjs.com/package/@react-hook/media-query
 * > https://stackoverflow.com/questions/71888615/respond-to-media-queries-in-react-js
 */
import React from "react";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import MasterDetail from "./MasterDetail";
import Centered from "./Centered";

interface Props {}

const Master: React.FC<Props> = (props) => {
  const matches = useMediaQuery("only screen and (min-width: 769px)");
  return <>{matches ? <MasterDetail /> : <Centered />}</>;
};

export default Master;
