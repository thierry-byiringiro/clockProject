import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import StopWatch from "./components/StopWatch";
import Timer from "./components/Timer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex  gap-5 items-center justify-center ">
        <StopWatch />
        <Timer />
      </div>
    </>
  );
}

export default App;
