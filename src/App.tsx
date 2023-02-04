import { useState } from "react";
import Search from "./components/Search";

type Props = {};

const App = (props: Props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="App flex flex-col items-center justify-center h-full">
      <Search />
    </div>
  );
};

export default App;
