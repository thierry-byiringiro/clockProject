export default function HandleSelection({ selectedTime, onSelect }) {
  return (
    <>
      <div>
        <select name="" value={selectedTime} onChange={(e) => onSelect(e.target.value)} className="text-lg border border-gray-500 rounded-lg text-green-400 p-1">
          <option value="">Time(min)</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </>
  );
}
