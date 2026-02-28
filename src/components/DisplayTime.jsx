export default function DisplayTime({ elapsedTime }) {
  const isFinished = elapsedTime === 0;
  let minutes = Math.floor(elapsedTime / 60000);
  let seconds = Math.floor((elapsedTime % 60000) / 1000);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");
  return (
    <>
      <div className={`font-bold text-2xl ${isFinished ? "text-red-700" : ""}`}>
        {minutes}:{seconds}:{milliseconds}
      </div>
    </>
  );
}
