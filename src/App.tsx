import { useState } from "react";
import Search from "./views/Search";

type Props = {};

const App = (props: Props) => {
  return (
    // <div id="App" className="flex flex-col items-center justify-center h-full">
    <div id="App" className="">
      <Search />
    </div>
  );
};

export default App;
