import { useEffect, useState } from "react";
import DisplayTime from "./DisplayTime";
import HandleSelection from "./HandleSelection";
import Button from "./Button";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [wasClicked,setWasClicked] = useState(false);

  const handleSelect = (value) => {
    setSelectedTime(value);
    if (value) {
      const minutes = Number(value);
      setTimeLeft(minutes * 60 * 1000);
      setIsRunning(false);
    }
  };

  const start = () => {
    if (!selectedTime) return;
    setIsRunning(true);
  };

  const pause = () => {
    setIsRunning(false);
    setWasClicked(prev => !prev);
    if(wasClicked){
        setIsRunning(true)
    }
  };

  const reset = () => {
    setIsRunning(false);
    if (selectedTime) {
      const minutes = Number(selectedTime);
      setTimeLeft(minutes * 60 * 1000);
    }
  };
  useEffect(() => {
    let intervalId;
    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prev) => prev - 10);
      }, 10);
    }
    if (timeLeft <= 0) {
      setIsRunning(false);
      setTimeLeft(0);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft]);
  return (
    <>
      <fieldset className="flex flex-col items-center justify-center gap-6 border border-gray-400 p-6 rounded-lg">
        <legend className="px-2 font-bold text-2xl text-gray-500">Timer</legend>
        <HandleSelection selectedTime={selectedTime} onSelect={handleSelect} />
        <DisplayTime elapsedTime={timeLeft} />
        <div className="flex space-x-5">
          <Button onClick={start} value="Start" backgroundColor="green" />
          <Button onClick={pause} value={wasClicked ? "Resume" : "Pause" } backgroundColor="#FF7F7F" />
          <Button onClick={reset} value="Reset" backgroundColor="blue" />
        </div>
      </fieldset>
    </>
  );
}
