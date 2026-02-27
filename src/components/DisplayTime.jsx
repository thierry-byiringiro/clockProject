export default function DisplayTime({ elapsedTime }) {
  let hours = Math.floor(elapsedTime / 3600);
  let minutes = Math.floor((elapsedTime % 3600) / 60);
  let seconds = elapsedTime % 60;
  hours = String(hours).padStart(2,"0");
  minutes = String(hours).padStart(2, "0");
  seconds = String(hours).padStart(2, "0");

  return (
    <>
      <div className="font-bold text-2xl">
        {hours}:{minutes}:{seconds}
      </div>
    </>
  );
}
