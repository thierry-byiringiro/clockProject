import { useState } from "react";
import DisplayTime from "./DisplayTime";
import HandleSelection from "./HandleSelection";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

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
  };

  const reset = () => {
    setIsRunning(false);
    if (selectedTime) {
      const minutes = Number(selectedTime);
      setTimeLeft(minutes * 60 * 1000);
    }
  };
  return (
    <>
      <fieldset className="flex flex-col items-center justify-center gap-6 border border-gray-400 p-6 rounded-lg">
        <legend className="px-2 font-bold text-2xl text-gray-500">Timer</legend>
        <HandleSelection selectedTime={selectedTime} onSelect={handleSelect} />
        <DisplayTime />
        <div className="flex space-x-5">
          <Button onClick={start} value="Start" backgroundColor="green" />
          <Button onClick={pause} value="Pause" backgroundColor="#FF7F7F" />
          <Button onClick={reset} value="Reset" backgroundColor="blue" />
        </div>
      </fieldset>
    </>
  );
}
