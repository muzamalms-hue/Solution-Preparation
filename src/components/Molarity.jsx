export default function Molarity() {
  return (
    <div className="container">
      <h2>General Molarity</h2>

      <input placeholder="Formula Weight (g/mol)" />

      <select>
        <option>L</option>
        <option>mL</option>
        <option>µL</option>
      </select>

      <select>
        <option>M</option>
        <option>mM</option>
        <option>µM</option>
        <option>nM</option>
        <option>pM</option>
        <option>fM</option>
      </select>

      <button>Calculate</button>
    </div>
  );
}
