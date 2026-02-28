import { useEffect, useState } from "react";
import Button from "./Button";
import DisplayTime from "./DisplayTime";

export default function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const start = () => {
    setIsRunning(true);
  };
  const stop = () => {
    setIsRunning(false);
  };
  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 10);
      }, 10);
    }
    return () => clearInterval(intervalId);
  },[isRunning]);
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-15">
        <div>
          <DisplayTime elapsedTime={seconds} />
        </div>
        <div className="flex space-x-5 ">
          <Button onClick={start} value="Start" backgroundColor="green" />
          <Button onClick={stop} value="Stop" backgroundColor="#FF7F7F" />
          <Button onClick={reset} value="Reset" backgroundColor="blue" />
        </div>
      </div>
    </>
  );
}
